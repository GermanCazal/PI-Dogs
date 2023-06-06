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

dogRouter.get("/name?", async (req, res) => {
  res.status(200).send("estoy en dogname");
});

module.exports = dogRouter;
