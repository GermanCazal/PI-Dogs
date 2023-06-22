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

const createDogDB = async (name, image, height, weight, life_span) => {
  const newDog = await Dog.create({
    name,
    image,
    height,
    weight,
    life_span,
  });
  return newDog;
};

//traigo un dog por id desde la api o db

const getById = async (id) => {
  if (id.includes("-")) {
    let dogDB = await Dog.findOne({
      where: {
        id: id,
      },
      include: Temperament,
    });

    dogDB = JSON.stringify(dogDB);
    dogDB = JSON.parse(dogDB);

    dogDB.temperaments = dogDB.temperaments.map((d) => d.name + ", ");
    return dogDB;
  } else {
    const response = await axios.get(
      `https://api.thedogapi.com/v1/breeds/${id}`
    );

    let {
      id: breedId,
      name,
      weight,
      height,
      life_span,
      temperament,
      reference_image_id,
    } = response.data;

    return {
      id: breedId,
      name,
      weight: weight.metric,
      height: height.metric,
      life_span,
      temperaments: temperament,
      image: `https://cdn2.thedogapi.com/images/${reference_image_id}.jpg`,
    };
  }
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
      image: dog.image.url,
      height: dog.height.metric,
      weight: dog.weight.metric,
      life_span: dog.life_span,
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
