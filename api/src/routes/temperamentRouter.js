const { Router } = require("express");
const { temperamentHandler } = require("../handlers/postHandlers");

const temperamentRouter = Router();

temperamentRouter.get("/temperaments", temperamentHandler);
module.exports = temperamentRouter;
