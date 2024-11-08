// public.controller.js
const db = require("../models");
const MataKuliah = require("../models/matakuliah.model");

// POST DATA KE DATABASE
exports.addData = async (req, res) => {
    const { mata_kuliah } = req.body; 
    
    if (!Array.isArray(mata_kuliah)) {
      return res.status(400).json({ message: "Data harus berupa array." });
    }
  
    try {
      const savedData = await MataKuliah.insertMany(mata_kuliah);
      res.status(201).json(savedData); 
    } catch (error) {
      res.status(500).json({ message: error.message }); 
    }
  };

exports.getData = async (req, res) => {
  try {
    const mata_kuliah = await MataKuliah.find();

    if (mata_kuliah.length == 0) {
      return res.status(200).json({ message: "Data Kosong" })
    }
    res.status(200).json(mata_kuliah); 
  } catch (error) {
    res.status(500).json({ message: error.message }); 
  }
}
