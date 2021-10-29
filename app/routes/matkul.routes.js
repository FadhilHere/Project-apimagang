module.exports = (app) => {
  const matakuliah = require("../controllers/matkul.controller");

  var router = require("express").Router();

  router.post("/", matakuliah.create);
  router.get("/", matakuliah.findAll);
  router.get("/:id", matakuliah.findOne);
  router.put("/:id", matakuliah.update);
  router.delete("/:id", matakuliah.delete);

  app.use("/api/matkul", router);
};
