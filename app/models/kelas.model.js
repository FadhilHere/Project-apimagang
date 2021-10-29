const { Schema } = require("mongoose");

module.exports = (mongoose) => {
  const Kelas = mongoose.model(
    "kelas",
    mongoose.Schema(
      {
        kelas: String,
        id_matakuliah: [
          {
            type: Schema.Types.ObjectId,
            ref: "matakuliah",
          },
        ],
      },
      {
        timestamps: true,
      }
    )
  );
  return Kelas;
};
