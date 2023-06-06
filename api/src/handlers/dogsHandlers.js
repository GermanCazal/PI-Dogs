//query --> /?name=""

const getDogsHandler = (req, res) => {
  const { name } = req.query;
  if (name) {
    return res.status(200).send(`se encontro el nombre: ${name}`);
  }
};

//dog/:idRaza
const getDogsIdHandler = (req, res) => {
  const { id } = req.params;
  res.status(200).send(`Usuario con id: ${id}`);
};

//dog/post
const postDogsHandler = (req, res) => {
  const { name, imagen, altura, peso, añoDeVida } = req.body;
  res
    .status(200)
    .send(
      `creamos el perro con los datos: nombre: ${name},foto: ${imagen},altura: ${altura},peso:${peso},años de vida:${añoDeVida}`
    );
};

module.exports = {
  getDogsHandler,
  getDogsIdHandler,
  postDogsHandler,
};
