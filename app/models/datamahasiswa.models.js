const { Schema } = require("mongoose");

module.exports = (mongoose) => {
  const Datamhs = mongoose.model(
    "datamahasiswa",
    mongoose.Schema(
      {
        nim: String,
        nama: String,
        id_prodi: {
          type: Schema.Types.ObjectId,
          ref: "prodi",
        },
        email: String,
        alamat: String,
        notelp: String,
        alamatortu: String,
        foto: String,
        nik: String,
        gender: String,
        id_kelas: {
          type: Schema.Types.ObjectId,
          ref: "kelas",
        },
      },
      {
        timestamps: true,
      }
    )
  );
  return Datamhs;
};
