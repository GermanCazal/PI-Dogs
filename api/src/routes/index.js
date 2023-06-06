const { Router } = require("express");
const morgan = require("morgan");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const dogRouter = require("./dogRouter");
const temperamentRouter = require("./temperamentRouter");

const router = Router();
router.use(morgan("dev"));
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/dogs", dogRouter);
router.use("/post", temperamentRouter);

module.exports = router;
