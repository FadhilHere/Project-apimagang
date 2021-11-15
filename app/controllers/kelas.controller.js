const db = require("../models");
const Kelas = db.kelas;

exports.create = (req, res) => {
  const kelas = new Kelas({
    kelas: req.body.kelas,
    id_matakuliah: req.body.id_matakuliah,
  });

  // Save Kelas in the database
  Kelas.find({
    kelas: req.body.kelas,
  })
    .then((data) => {
      console.log(data[0]);
      if (!data[0]) {
        kelas
          .save(kelas)
          .then((data1) => {
            res.send(data1);
          })
          .catch((err) => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while creating the Kelas.",
            });
          });
      } else {
        res.status(412).send({ message: "Kelas sudah terdaftar" });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving.",
      });
    });
};

exports.findAll = (req, res) => {
  const kelas = req.query.kelas;
  var condition = kelas
    ? { kelas: { $regex: new RegExp(kelas), $options: "i" } }
    : {};

  Kelas.find(condition)
    .populate("id_matakuliah")
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

  Kelas.findById(id)
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

  Kelas.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Kelas with id=${id}. Maybe Kelas was not found!`,
        });
      } else res.send({ message: "Kelas was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Kelas with id=" + id,
      });
    });

  // Kelas.find({
  //   kelas: req.body.kelas,
  // }).then((data) => {
  //   console.log(data[0]);
  //   if (!data[0]) {
  //     Kelas.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(
  //       (data) => {
  //         res.send(data);
  //         if (!data) {
  //           res.status(404).send({
  //             message: `Cant find kelas with id=${id}.`,
  //           });
  //         } else res.send({ message: "kelas updated!" });
  //       }
  //     );
  //   } else {
  //     res.status(404).send({ message: "kelas yg anda input sudah ada!" });
  //   }
  // });
};
exports.delete = (req, res) => {
  const id = req.params.id;

  Kelas.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Kelas with id=${id}. Maybe Kelas was not found!`,
        });
      } else {
        res.send({
          message: "Kelas was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Kelas with id=" + id,
      });
    });
};

exports.deleteAll = (req, res) => {};

exports.findAllPublished = (req, res) => {};
