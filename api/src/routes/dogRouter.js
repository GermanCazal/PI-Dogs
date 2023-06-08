const { Router } = require("express");
const dogRouter = Router();
const {
  getDogsHandler,
  getDogsIdHandler,
  postDogsHandler,
} = require("../handlers/dogsHandlers");

dogRouter.get("/", getDogsHandler);
dogRouter.get("/:id", getDogsIdHandler);
dogRouter.post("/", postDogsHandler);

module.exports = dogRouter;
