const { createDogDB, getDogDB } = require("../controllers/dogsControllers");

//query --> /?name=""

const getDogsHandler = async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      const response = await getDogDB(name);
      return res.status(200).json(response);
    }
    const response = await getDogDB();
    return res.status(200).json(response);

    res.status(200).send("Todos los usuarios");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//dog/:idRaza
const getDogsIdHandler = (req, res) => {
  const { id } = req.params;
  res.status(200).send(`Usuario con id: ${id}`);
};

//dog/post
const postDogsHandler = async (req, res) => {
  const { name, imagen, altura, peso, añosDeVida } = req.body;
  try {
    const response = await createDogDB(name, imagen, altura, peso, añosDeVida);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getDogsHandler,
  getDogsIdHandler,
  postDogsHandler,
};
