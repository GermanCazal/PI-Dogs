const { Dog } = require("../db");
const axios = require("axios");

//traigo un dog por name de la db
// const getDogDB = async (name) => {
//   if (name) {
//     const dogByName = await Dog.findOne({ where: { name } });
//     return dogByName;
//   }
//   return allDog;
// };

//Post de un dog a la DB

const createDogDB = async (name, imagen, altura, peso, añosDeVida) => {
  const newDog = await Dog.create({ name, imagen, altura, peso, añosDeVida });
  return newDog;
};

//traigo un dog por id desde la api o db

const getById = async (id) => {
  if (isNaN(id)) {
    const dog = await Dog.findByPk(id);
    return dog;
  }
  const dog = (await axios.get(`https://api.thedogapi.com/v1/breeds/${id}`))
    .data;
  return dog;
};

//traigo todos los dog de la db
const getdogdb = async () => {
  const allDogs = await Dog.findAll();
  return allDogs;
};
//traigo todos los dog de la API
const getDogApi = async () => {
  const peticion = (await axios.get("https://api.thedogapi.com/v1/breeds"))
    .data;
  const apiInfoMap = peticion.map((dog) => {
    return {
      id: dog.id,
      name: dog.name,
      imagen: dog.image.url,
      altura: dog.height.metric,
      peso: dog.weight.metric,
      añosdeVida: dog.life_span,
      temperaments: dog.temperament,
    };
  });
  return apiInfoMap;
};

const getAlldogs = async (name) => {
  const dogsDB = await getdogdb(); // dog de la db
  const dogApi = await getDogApi(); // dog de la api
  const allDogs = [...dogsDB, ...dogApi]; // todos los dogs

  if (name) {
    let filterDogs = allDogs.filter((dog) =>
      dog.name.toLowerCase().includes(name.toLowerCase())
    ); //busco un dog por name de la API o DB
    if (filterDogs.length) {
      return filterDogs;
    }
    throw new Error("No se encontro un perro con ese nombre");
  } else {
    return allDogs;
  }
  return allDogs;
};

//post hago un post a la db
// const createPostDB = async (name, imagen, altura, peso, añosDeVida, dogId) => {
//   const post = await Dog.create({ name, imagen, altura, peso, añosDeVida });
//   await post.setDog(dogId);
//   return post;
// };

module.exports = {
  createDogDB,
  // getDogDB,
  getById,
  getAlldogs,
  // createPostDB,
};
