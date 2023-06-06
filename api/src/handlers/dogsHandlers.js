//query --> /?name=""

const getDogsHandler = (req, res) => {
  const { name } = req.query;
  if (name) {
    return res.status(200).send(`se encontro el nombre: ${name}`);
  }
};

module.exports = {
  getDogsHandler,
};
