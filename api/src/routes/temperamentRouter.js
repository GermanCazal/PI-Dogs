const { Router } = require("express");
const { getTemperaments } = require("../handlers/temperamentHandler");

const temperamentRouter = Router();

temperamentRouter.get("/", getTemperaments);
module.exports = temperamentRouter;
