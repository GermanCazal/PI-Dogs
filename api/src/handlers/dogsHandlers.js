const {
  createDogDB,
  // getDogDB,
  getById,
  getAlldogs,
  // createPostDB,
} = require("../controllers/dogsControllers");

//query --> /?name=""

const getDogsHandler = async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      const response = await getAlldogs(name);
      return res.status(200).json(response);
    }
    const response = await getAlldogs();
    return res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//dog/:idRaza
const getDogsIdHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await getById(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//dog/post
const postDogsHandler = async (req, res) => {
  const { name, image, height, weight, life_span } = req.body;
  try {
    if (!name || !image) return res.status(400).json({ msg: "faltan datos" });
    const response = await createDogDB(name, image, height, weight, life_span);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// const postDogsHandler = async (req, res) => {
//   const { name, imagen, altura, peso, añosDeVida, dogId } = req.body;
//   try {
//     const response = await createPostDB(
//       name,
//       imagen,
//       altura,
//       peso,
//       añosDeVida,
//       dogId
//     );
//     res.status(200).json(response);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

module.exports = {
  getDogsHandler,
  getDogsIdHandler,
  postDogsHandler,
};
