const mongoose = require("mongoose");

const MataKuliah = mongoose.model(
  "Mata Kuliah",
  new mongoose.Schema({
    nama: {
        type: String,
        required: true
    },
    kode: {
      type: String,
      required: true
    },
    jumlah_sks: {
        type: Number,
        required: true
    },
  })
);

module.exports = MataKuliah;
