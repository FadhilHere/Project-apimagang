const { Schema } = require("mongoose");

module.exports = (mongoose) => {
  const Absensi = mongoose.model(
    "absensi",
    mongoose.Schema(
      {
        tanggal: String,
        id_kelas: [
          {
            type: Schema.Types.ObjectId,
            ref: "kelas",
          },
        ],
        id_matakuliah: [
          {
            type: Schema.Types.ObjectId,
            ref: "matkul",
          },
        ],
        kodematkul: String,
        id_ruangan: [
          {
            type: Schema.Types.ObjectId,
            ref: "ruangan",
          },
        ],
        metode: String,
        jamMasuk: String,
        jamKeluar: String,
        jumlahJam: String,
        judulMateri: String,
      },
      {
        timestamps: true,
      }
    )
  );
  return Absensi;
};
