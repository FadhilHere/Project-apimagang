const { Schema } = require("mongoose");

module.exports = (mongoose) => {
  const Mahasiswa = mongoose.model(
    "mahasiswa",
    mongoose.Schema(
      {
        foto: String,
        nama: String,
        nim: String,
        nik: String,
        jenisKelamin: String,
        id_programStudi: [
          {
            type: Schema.Types.ObjectId,
            ref: "prodi",
          },
        ],
        id_kelas: [
          {
            type: Schema.Types.ObjectId,
            ref: "kelas",
          },
        ],
        email: String,
        alamat: String,
        noTelp: String,
        alamatOrtu: String,
        kabupatenMhs: String,
        kecamatanMhs: String,
        kodeposMhs: String,
        kabupatenOrtu: String,
        kecamatanMhs: String,
        kodeposMhs: String,
      },
      {
        timestamps: true,
      }
    )
  );
  return Mahasiswa;
};
