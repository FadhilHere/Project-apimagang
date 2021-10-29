const { Schema } = require("mongoose");

module.exports = (mongoose) => {
  const Matakuliah = mongoose.model(
    "matkul",
    mongoose.Schema(
      {
        matakuliah: String,
        kode: String,
      },
      {
        timestamps: true,
      }
    )
  );
  return Matakuliah;
};
