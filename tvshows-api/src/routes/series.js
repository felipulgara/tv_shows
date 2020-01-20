const Router = require("restify-router").Router;
const router = new Router();
const sql = require("mssql");
const sqlConfig = require("../config/database");

const {
  getAllSeries,
  getSerie,
  setSerie,
  updateSerie,
  deleteSerie
} = require("../services/series");

router.get("/all", async (req, res) => {
  res.send(200, await getAllSeries());
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  res.send(200, await getSerie(id));
});

router.post("/add", async (req, res) => {
  const { body } = req;
  res.send(201, await setSerie(body));
});

router.put("/update/:id", async (req, res) => {
  const { body } = req;
  const { id } = req.params;
  res.send(201, await updateSerie(id, body));
});

router.del("/delete/:id", async (req, res) => {
  const { id } = req.params;
  res.send(200, await deleteSerie(id));
});

module.exports = router;
