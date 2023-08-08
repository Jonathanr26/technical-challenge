// Importar el módulo db que contiene la conexión a la base de datos
const db = require("../db");

// Controlador para guardar los datos del usuario en la base de datos.
const createUser = (req, res) => {
  const {
    nombre,
    segundoNombre,
    apellidoPaterno,
    apellidoMaterno,
    dia,
    mes,
    anio,
    correoElectronico,
    telefonoCelular,
  } = req.body;

  const fechaNacimiento = `${dia} ${mes} ${anio}`;

  // Consulta SQL para insertar los datos del usuario en la tabla
  const sql = `INSERT INTO users_test_jonathan_rodriguez (nombre, segundo_nombre, apellido_paterno, apellido_materno, fecha_nacimiento, correo_electronico, telefono) VALUES (?, ?, ?, ?, ?, ?, ?)`;
  const values = [
    nombre,
    segundoNombre,
    apellidoPaterno,
    apellidoMaterno,
    fechaNacimiento,
    correoElectronico,
    telefonoCelular,
  ];

  // Ejecutar la consulta en la base de datos
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error inserting data into database:", err);
      res.status(500).json({ error: "Error inserting data into database" });
      return;
    }
    console.log("Data inserted successfully!");
    res.status(200).json({ message: "Data inserted successfully" });
  });
};


// Controlador para obtener todos los usuarios de la base de datos.
const getAllUsers = (req, res) => {
  // Consulta SQL para obtener todos los usuarios de la tabla
  const sql = "SELECT * FROM users_test_jonathan_rodriguez";

  // Ejecutar la consulta en la base de datos
  db.query(sql, (err, result) => {
    if (err) {
      console.error("Error querying database:", err);
      res.status(500).json({ error: "Error querying database" });
      return;
    }
    console.log("Data retrieved successfully!");
    res.status(200).json(result);
  });
};

// Exportar los controladores para ser utilizados en otros módulos
module.exports = {
  createUser,
  getAllUsers,
};
