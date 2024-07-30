const mongoose = require("mongoose");

const shoesSchema = new mongoose.Schema({
  name: String, // (name of the shoe)
  brand: String, // (nike, adidas, vans, etc.)
  photos: [String], //(daghan ni nga pic kay array)
  description: String, // (description of the shoe)
  price: Number, // (presyo ofc)
  type: String, //(sneakers, sandals,, highTop, LowTop etc.)
  tags: [String], // (tags like basketball shoes, sneaks, bla, etc.)
  size: Number, // (5,6,7,8,9,10,11,12,13 unsa pana)
  color1: String, // (color of the shoe one color ra )
  color2: String, // (color of the shoe two color ra )
  status: Boolean, // (available or not)
  date: Date, // (date of the shoe)
});

const ShoesModel = mongoose.model("Shoes", shoesSchema);

module.exports = ShoesModel;
