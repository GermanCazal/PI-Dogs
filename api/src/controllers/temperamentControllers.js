const axios = require("axios");
const { Temperament } = require("../db");

const getTemperaments = async () => {
  const temperamentsDB = await Temperament.findAll();
  if (temperamentsDB.length >= 1) return temperamentsDB;

  const response = await axios.get("https://api.thedogapi.com/v1/breeds");
  const TemperamentsData = response.data;

  let everyTemperament = TemperamentsData.map((dog) =>
    dog.temperament ? dog.temperament : null
  ).map((dog) => dog && dog.split(", "));
  let eachTemperament = [...new Set(everyTemperament.flat())];

  eachTemperament.forEach(async (el) => {
    if (el) {
      await Temperament.findOrCreate({
        where: { name: el },
      });
    }
  });

  eachTemperament = await Temperament.findAll();
  return eachTemperament;
};

module.exports = { getTemperaments };
