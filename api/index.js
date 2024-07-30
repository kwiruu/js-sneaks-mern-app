const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
require("dotenv").config();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("./models/User.js");
const app = express();
const CookieParser = require("cookie-parser");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const Shoes = require("./models/Shoes.js");

const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = "whatisthesoundofthedog";

app.use(express.json());
app.use(CookieParser());
app.use("/uploads", express.static(__dirname + "/uploads"));

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

console.log(process.env.MONGO_URL);
mongoose.connect(process.env.MONGO_URL);

app.get("/test", (req, res) => {
  res.json("test ok");
});

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userDoc = await User.create({
      name,
      email,
      password: bcrypt.hashSync(password, bcryptSalt),
    });
    res.json(userDoc);
  } catch (e) {
    res.status(422).json(e);
  }
});

app.post("/login", async (req, res) => {
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
            // Handle error appropriately
            res.status(500).json("Error generating token");
            return; // Ensure no further execution in case of error
          }
          res
            .cookie("token", token, { httpOnly: true, path: "/" })
            .json(userDoc);
          // Removed the second res.cookie call to prevent overriding the first one
        }
      );
    } else {
      res.status(422).json("pass not ok");
    }
  } else {
    res.json("not found");
  }
});

app.get("/profile", (req, res) => {
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

app.post("/logout", (req, res) => {
  res.clearCookie("token").json(true);
});

const photosMiddleware = multer({ dest: "uploads/" });

app.post("/upload", photosMiddleware.array("photos", 20), (req, res) => {
  const uploadedFiles = [];

  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ error: "No files were uploaded." });
  }

  for (let i = 0; i < req.files.length; i++) {
    const { path: filePath, originalname } = req.files[i];

    if (!originalname) {
      return res.status(400).json({ error: "File has no original name." });
    }

    const parts = originalname.split(".");
    const ext = parts[parts.length - 1];
    const newPath = filePath + "." + ext;

    try {
      fs.renameSync(filePath, newPath);
      const fileName = path.basename(newPath);
      uploadedFiles.push(fileName);
    } catch (error) {
      console.error("Error renaming file:", error);
      return res.status(500).json({ error: "Error processing file." });
    }
  }

  res.json(uploadedFiles);
});

app.post("/shoes", (req, res) => {
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

app.get("/shoes", async (req, res) => {
  res.json(await Shoes.find({ status: true }));
});

app.get("/shoes/:id", async (req, res) => {
  const { id } = req.params;
  res.json(await Shoes.findById(id));
});

app.put("/shoes", async (req, res) => {
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
  res.status(404).json("Not found");
});

app.listen(4000);
