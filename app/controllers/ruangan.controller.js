const db = require("../models");
const Ruangan = db.ruangan;

exports.create = (req, res) => {
  const ruangan = new Ruangan({
    ruangan: req.body.ruangan,
  });

  // Save Ruangan in the database
  Ruangan.find({
    ruangan: req.body.ruangan,
  }).then((data) => {
    console.log(data[0]);
    if (!data[0]) {
      ruangan
        .save(ruangan)
        .then((data) => {
          res.send(data);
        })
        .catch((err) => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the ruangan.",
          });
        });
    } else {
      res.status(404).send({ message: "ruangan yg anda input sudah ada!" });
    }
  });
};

exports.findAll = (req, res) => {
  const ruangan = req.query.ruangan;
  var condition = ruangan
    ? { ruangan: { $regex: new RegExp(ruangan), $options: "i" } }
    : {};

  Ruangan.find(condition)
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

  Ruangan.findById(id)
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

  Ruangan.find({
    ruangan: req.body.ruangan,
  }).then((data) => {
    console.log(data[0]);
    if (!data[0]) {
      Ruangan.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then((data) => {
          if (!data) {
            res.status(404).send({
              message: `Cant find ruangan with id=${id}.`,
            });
          } else res.send({ message: "ruangan updated!" });
        })
        .catch((err) => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while updating the ruangan.",
          });
        });
    } else {
      res.status(404).send({ message: "ruangan yg anda input sudah ada!" });
    }
  });
};
exports.delete = (req, res) => {
  const id = req.params.id;

  Ruangan.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Ruangan with id=${id}. Maybe Ruangan was not found!`,
        });
      } else {
        res.send({
          message: "Ruangan was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Ruangan with id=" + id,
      });
    });
};

exports.deleteAll = (req, res) => {};

exports.findAllPublished = (req, res) => {};
