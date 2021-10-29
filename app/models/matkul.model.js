const { Schema } = require("mongoose");

module.exports = (mongoose) => {
  const Matakuliah = mongoose.model(
    "matkul",
    mongoose.Schema(
      {
        matkul: String,
        kode: String,
      },
      {
        timestamps: true,
      }
    )
  );
  return Matakuliah;
};
