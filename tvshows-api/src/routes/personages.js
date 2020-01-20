const Router = require("restify-router").Router;
const router = new Router();
const sql = require("mssql");
const sqlConfig = require("../config/database");

const {
  getAllPersonages,
  getPersonage,
  setPersonage,
  updatePersonage,
  deletePersonage
} = require("../services/personages");

router.get("/all", async (req, res) => {
  res.send(200, await getAllPersonages());
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  res.send(200, await getPersonage(id));
});

router.post("/add", async (req, res) => {
  const { body } = req;
  res.send(201, await setPersonage(body));
});

router.put("/update/:id", async (req, res) => {
  const { body } = req;
  const { id } = req.params;
  res.send(201, await updatePersonage(id, body));
});

router.del("/delete/:id", async (req, res) => {
  const { id } = req.params;
  res.send(200, await deletePersonage(id));
});

module.exports = router;
