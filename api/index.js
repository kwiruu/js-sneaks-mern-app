require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("./models/User.js");
const app = express();
const CookieParser = require("cookie-parser");
const fs = require("fs");
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const path = require("path");
const Shoes = require("./models/Shoes.js");
const multer = require("multer");
const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = "whatisthesoundofthedog";

const bucketName = process.env.S3_BUCKET_NAME;

app.use(express.json());
app.use(CookieParser());
app.use("/uploads", express.static(__dirname + "/uploads"));

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

async function uploadToS3(filePath, originalFileName, mimetype) {
  console.log("Access Key:", process.env.S3_ACCESS_KEY);
  console.log("Secret Key:", process.env.S3_SECRET_ACCESS_KEY);
  console.log("Bucket Name:", process.env.S3_BUCKET_NAME);

  const client = new S3Client({
    region: "ap-southeast-2",
    credentials: {
      accessKeyId: process.env.S3_ACCESS_KEY,
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
    },
  });

  const parts = originalFileName.split(".");
  const ext = parts[parts.length - 1];
  const newFilename = `${Date.now()}.${ext}`;

  const data = await client.send(
    new PutObjectCommand({
      Bucket: bucketName,
      Key: newFilename,
      Body: fs.readFileSync(filePath),
      ContentType: mimetype,
      ACL: "public-read",
    })
  );
  return `https://${bucketName}.s3.amazonaws.com/${newFilename}`;
}

app.get("/api/test", (req, res) => {
  mongoose.connect(process.env.MONGO_URL);
  res.json("test ok");
});

app.post("/api/login", async (req, res) => {
  mongoose.connect(process.env.MONGO_URL);
  const { email, password } = req.body;

  const userDoc = await User.findOne({ email });

  if (userDoc) {
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
      jwt.sign(
        { email: userDoc.email, id: userDoc._id },
        jwtSecret,
        {},
        (err, token) => {
          if (err) {
            res.status(500).json("Error generating token");
            return;
          }
          res
            .cookie("token", token, { httpOnly: true, path: "/" })
            .json(userDoc);
        }
      );
    } else {
      res.status(422).json("pass not ok");
    }
  } else {
    res.json("not found");
  }
});

app.get("/api/profile", (req, res) => {
  mongoose.connect(process.env.MONGO_URL);
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
      if (err) throw err;
      const { name, email, _id } = await User.findById(userData.id);
      res.json({ name, email, _id });
    });
  } else {
    res.json(null);
  }
});

app.post("/api/logout", (req, res) => {
  res.clearCookie("token").json(true);
});

const photosMiddleware = multer({ dest: "/tmp" });
app.post(
  "/api/upload",
  photosMiddleware.array("photos", 100),
  async (req, res) => {
    mongoose.connect(process.env.MONGO_URL);
    const uploadedFiles = [];

    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: "No files were uploaded." });
    }

    for (let i = 0; i < req.files.length; i++) {
      const { path, originalname, mimetype } = req.files[i];

      uploadedFiles.push(await uploadToS3(path, originalname, mimetype));
    }

    res.json(uploadedFiles);
  }
);

app.post("/api/shoes", (req, res) => {
  mongoose.connect(process.env.MONGO_URL);

  const {
    name,
    brand,
    addedPhoto,
    description,
    price,
    type,
    tags,
    size,
    color1,
    color2,
    status,
    date,
  } = req.body;

  const shoeDoc = Shoes.create({
    name,
    brand,
    photos: addedPhoto,
    description,
    price,
    type,
    tags,
    size,
    color1,
    color2,
    status,
    date,
  });
  res.json(shoeDoc);
});

app.get("/api/shoes", async (req, res) => {
  mongoose.connect(process.env.MONGO_URL);
  res.json(await Shoes.find({}));
});

app.get("/api/shoes/:id", async (req, res) => {
  mongoose.connect(process.env.MONGO_URL);
  const { id } = req.params;
  res.json(await Shoes.findById(id));
});

app.put("/api/shoes", async (req, res) => {
  mongoose.connect(process.env.MONGO_URL);
  const {
    id,
    name,
    brand,
    addedPhoto,
    description,
    price,
    type,
    tags,
    size,
    color1,
    color2,
    status,
    date,
  } = req.body;

  const shoeDoc = await Shoes.findById(id);

  shoeDoc.set({
    name,
    brand,
    photos: addedPhoto,
    description,
    price,
    type,
    tags,
    size,
    color1,
    color2,
    status,
    date,
  });
  shoeDoc.save();
  res.json("ok");
});

app.use((req, res) => {
  mongoose.connect(process.env.MONGO_URL);
  res.status(404).json("Not found");
});

app.delete("/api/shoes/:id", async (req, res) => {
  mongoose.connect(process.env.MONGO_URL);
  const { id } = req.params;
  try {
    await Shoes.findByIdAndDelete(id);
    res.status(200).json({ message: "Shoe deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete shoe", error });
  }
});

app.listen(4000);
