const dbConfig = require("../db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
//db.absensi_pegawai = require('./absensi_pegawai.model.js')(mongoose);
//db.pegawai = require('./pegawai.model.js')(mongoose);
db.mahasiswa = require("./datamahasiswa.model")(mongoose);
db.kelas = require("./kelas.model")(mongoose);
// db.dosen = require("./dosen.model")(mongoose);
db.matkul = require("./matkul.model")(mongoose);
db.prodi = require("./prodi.model")(mongoose);
// db.absensi = require("./absensi.model")(mongoose);
db.ruangan = require("./ruangan.model")(mongoose);
module.exports = db;
