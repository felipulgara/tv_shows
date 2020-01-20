const restify = require("restify");
const morgan = require("morgan");
const seriesRoutes = require("./routes/series");
const personagesRoutes = require("./routes/personages");
const adminRoutes = require("./routes/admin");
const bodyParser = require("body-parser");
const corsMiddleware = require("restify-cors-middleware");
const Router = require("restify-router").Router;
const router = new Router();
const { API_PORT } = process.env;
require("dotenv").config();

// Settings
const server = restify.createServer();
const cors = corsMiddleware({
  origins: ["*"],
  allowHeaders: ["Authorization"],
  exposeHeaders: ["Authorization"]
});

// For tokens
const jsonWebToken = require("jsonwebtoken");
const restifyJwtCommunity = require("restify-jwt-community");

//Middleware (funciones que se ejecutan cada vez que llega un patición)
server.use(morgan("dev"));
server.pre(cors.preflight);
server.use(cors.actual);

server.use(bodyParser.json());
server.use(
  restifyJwtCommunity({ secret: "my-secret-key" }).unless({
    path: ["/admin/token"]
  })
);

server.use((req, res, next) => {
  if (req.url === "/admin/token") {
    return next();
  }
  let authorization = req.header("authorization").split(" ");
  try {
    var decoded = jsonWebToken.verify(authorization[1], "my-secret-key");
    return next();
  } catch (error) {
    res.send(401, { message: "Not authorized" });
    return next();
  }
});

//Routes
router.add("/series", seriesRoutes);
router.add("/personages", personagesRoutes);
router.add("/admin", adminRoutes);
router.applyRoutes(server);

server.listen(API_PORT, function() {
  console.log("Server running on port", API_PORT);
});

module.exports = server;
