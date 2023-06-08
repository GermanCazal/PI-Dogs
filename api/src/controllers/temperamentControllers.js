require("dotenv").config;

const { Router } = require("express");
const axios = require("axios");
const { Temperament } = require("../db");

const router = Router();

const getTemperaments = router.get("/", async (req, res) => {
  try {
    const temperamentsDB = await Temperament.findAll();
    if (temperamentsDB.length >= 1) return;
    res.json(temperamentsDB);

    const response = await axios.get("https://api.thedogapi.com/v1/breeds");
    const TemperamentsData = response.data;

    let everyTemperament = TemperamentsData.map((dog) =>
      dog.temperament ? dog.temperament : null
    ).map((dog) => dog && dog.split(", "));
    let eachTemperament = [...new Set(everyTemperament.flat())];

    eachTemperament.forEach((el) => {
      if (el) {
        Temperament.findOreCreate({
          where: { name: el },
        });
      }
    });
    eachTemperament = await Temperament.findAll();
    res.status(200).json(eachTemperament);
  } catch (error) {
    res.status(404).send(error);
  }
});
module.exports = { getTemperaments };
