const { Router } = require("express");

const temperamentRouter = Router();

temperamentRouter.get("/", async (req, res) => {
  res.status(200).send("estoy en temperaments");
});
module.exports = temperamentRouter;
