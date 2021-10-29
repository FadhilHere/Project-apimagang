module.exports = (app) => {
  const prodi = require("../controllers/prodi.controller");

  var router = require("express").Router();

  router.post("/", prodi.create);

  router.get("/", prodi.findAll);

  router.get("/:id", prodi.findOne);

  router.put("/:id", prodi.update);

  router.delete("/:id", prodi.delete);

  app.use("/api/prodi", router);
};
