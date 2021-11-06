const db = require("../models");
const Matakuliah = db.matkul;

exports.create = (req, res) => {
  const matkul = new Matakuliah({
    matkul: req.body.matkul,
    kode: req.body.kode,
  });

  Matakuliah.find({
    kode: req.body.kode,
  }).then((data) => {
    console.log(data[0]);
    if (!data[0]) {
      matkul
        .save(matkul)
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
      res.status(404).send({ message: "iko alah ado" });
    }
  });
  // Save Matakuliah in the database
  // Matakuliah.find({
  //   kode: req.body.kode,
  // }).then((data) => {
  //   console.log(data[0]);
  //   if (!data[0]) {
  //     matkul
  //       .save(matkul)
  //       .then((data) => {
  //         res.send(data);
  //       })
  //       .catch((err) => {
  //         res.status(500).send({
  //           message:
  //             err.message ||
  //             "Some error occurred while creating the Matakuliah.",
  //         });
  //       });
  //   }
  // });
  //   matkul
  //     .save(matkul)
  //     .then((data) => {
  //       res.send(data);
  //     })
  //     .catch((err) => {
  //       res.status(500).send({
  //         message:
  //           err.message || "Some error occurred while creating the Matakuliah.",
  //       });
  //     });
};

exports.findAll = (req, res) => {
  const matkul = req.query.matkul;
  var condition = matkul
    ? { matkul: { $regex: new RegExp(matkul), $options: "i" } }
    : {};

  Matakuliah.find(condition)
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

  Matakuliah.findById(id)
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

  Matakuliah.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Matakuliah with id=${id}. Maybe Matakuliah was not found!`,
        });
      } else res.send({ message: "Matakuliah was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Matakuliah with id=" + id,
      });
    });
};
exports.delete = (req, res) => {
  const id = req.params.id;

  Matakuliah.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Matakuliah with id=${id}. Maybe Matakuliah was not found!`,
        });
      } else {
        res.send({
          message: "Matakuliah was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Matakuliah with id=" + id,
      });
    });
};

exports.deleteAll = (req, res) => {};

exports.findAllPublished = (req, res) => {};
