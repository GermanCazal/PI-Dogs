const { Dog } = require("../db");

const createDogDB = async (name, imagen, altura, peso, añosDeVida) => {
  const newDog = await Dog.create({ name, imagen, altura, peso, añosDeVida });
  return newDog;
};

const getDogDB = async (name) => {
  if (name) {
    const dogByName = await Dog.findOne({ where: { name } });
    return dogByName;
  }
  const allDog = await Dog.findAll();
  return allDog;
};

module.exports = {
  createDogDB,
  getDogDB,
};
