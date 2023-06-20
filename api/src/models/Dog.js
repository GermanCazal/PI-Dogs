const { DataTypes, STRING, FLOAT, INTEGER } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "dog",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        // validate: {
        //   len: {
        //     args: [5, 10],
        //     msg: "El nombre debe contener entre 5 y 10 caracteres",
        //   },
        // },
      },
      image: {
        type: STRING,
      },
      height: {
        type: FLOAT,
      },
      weight: {
        type: FLOAT,
      },
      life_span: {
        type: INTEGER,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
};
