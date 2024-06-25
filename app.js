require("dotenv").config();

const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const fs = require("fs");
const YAML = require("yaml");

const app = express();

const swaggerUi = require("swagger-ui-express");
const file = fs.readFileSync("./swagger/build.yaml", "utf8");
const swaggerDocument = YAML.parse(file);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app;
