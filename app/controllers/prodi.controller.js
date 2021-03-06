const db = require("../models");
const Prodi = db.prodi;

exports.create = (req, res) => {
  const prodi = new Prodi({
    nama_prodi: req.body.nama_prodi,
  });

  // Save Prodi in the database
  Prodi.find({
    nama_prodi: req.body.nama_prodi,
  }).then((data) => {
    console.log(data[0]);
    if (!data[0]) {
      prodi
        .save(prodi)
        .then((data) => {
          res.send(data);
        })
        .catch((err) => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the matkul.",
          });
        });
    } else {
      res.status(404).send({ message: "Prodi yg anda input sudah ada!" });
    }
  });
};

exports.findAll = (req, res) => {
  const nama = req.query.nama;
  var condition = nama
    ? { nama: { $regex: new RegExp(nama), $options: "i" } }
    : {};

  Prodi.find(condition)
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

  Prodi.findById(id)
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

  Prodi.find({
    nama_prodi: req.body.nama_prodi,
  }).then((data) => {
    console.log(data[0]);
    if (!data[0]) {
      Prodi.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then((data) => {
          if (!data) {
            res.status(404).send({
              message: `Cant find Prodi with id=${id}.`,
            });
          } else res.send({ message: "Prodi updated!" });
        })
        .catch((err) => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while updating the Prodi.",
          });
        });
    } else {
      res.status(404).send({ message: "Prodi yg anda input sudah ada!" });
    }
  });
};
exports.delete = (req, res) => {
  const id = req.params.id;

  Prodi.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Prodi with id=${id}. Maybe Prodi was not found!`,
        });
      } else {
        res.send({
          message: "Prodi was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Prodi with id=" + id,
      });
    });
};

exports.deleteAll = (req, res) => {};

exports.findAllPublished = (req, res) => {};
