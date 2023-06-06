const { Router } = require("express");
const dogRouter = Router();
const { getDogsHandler } = require("../handlers/dogsHandlers");

dogRouter.get("/", getDogsHandler);

dogRouter.get("/:idRaza", async (req, res) => {
  res.status(200).send("estoy en dog id");
});

dogRouter.get("/name?", async (req, res) => {
  res.status(200).send("estoy en dogname");
});

dogRouter.post("/", async (req, res) => {
  res.status(200).send("estoy en post");
});

module.exports = dogRouter;
