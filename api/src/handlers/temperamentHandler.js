const temperamentController = require("../controllers/temperamentControllers");

const getTemperaments = async (req, res) => {
  try {
    const temperaments = await temperamentController.getTemperaments();
    res.status(200).json(temperaments);
  } catch (error) {
    res.status(404).send(error);
  }
};

module.exports = { getTemperaments };
