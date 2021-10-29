module.exports = (app) => {
  const ruangan = require("../controllers/ruangan.controller");

  var router = require("express").Router();

  router.post("/", ruangan.create);
  router.get("/", ruangan.findAll);
  router.get("/:id", ruangan.findOne);
  router.put("/:id", ruangan.update);
  router.delete("/:id", ruangan.delete);

  app.use("/api/ruangan", router);
};
