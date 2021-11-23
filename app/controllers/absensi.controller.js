const db = require("../models");
const Absensi = db.absensi;

exports.create = (req, res) => {
  const absensi = new Absensi({
    id_kelas: req.body.id_kelas,
    id_matakuliah: req.body.id_matakuliah,
    tanggal: req.body.tanggal,
    kodematkul: req.body.kodematkul,
    id_ruangan: req.body.id_ruangan,
    metode: req.body.metode,
    jamMasuk: req.body.jamMasuk,
    jamKeluar: req.body.jamKeluar,
    jumlahJam: req.body.jumlahJam,
    judulMateri: req.body.judulMateri,
  });
  // Save Absensi in the database
  absensi
    .save(absensi)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Absensi.",
      });
    });
};

exports.findAll = (req, res) => {
  Absensi.find()
    .populate("id_kelas")
    .populate("id_matakuliah")
    .populate("id_ruangan")
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Absensi.findById(id)
    .then((data) => {
      if (!data) res.status(404).send({ message: "Not found with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving with id=" + id });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Absensi.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Absensi with id=${id}. Maybe Absensi was not found!`,
        });
      } else res.send({ message: "Absensi was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Absensi with id=" + id,
      });
    });
};
exports.delete = (req, res) => {
  const id = req.params.id;

  Absensi.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Absensi with id=${id}. Maybe Absensi was not found!`,
        });
      } else {
        res.send({
          message: "Absensi was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Absensi with id=" + id,
      });
    });
};

exports.deleteAll = (req, res) => {};

exports.findAllPublished = (req, res) => {};
