// Importar el paquete mysql para interactuar con la base de datos MySQL
require('dotenv').config();
const mysql = require("mysql");


// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

// Conectar a la base de datos
connection.connect((err) => {
  if (err) {
    // En caso de error al conectarse a la base de datos
    console.error("Error connecting to the database:", err);
    return;
  }

  // Crear la tabla si no existe
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS users_test_tunombre (
      id INT AUTO_INCREMENT PRIMARY KEY,
      nombre VARCHAR(255) NOT NULL,
      segundo_nombre VARCHAR(255),
      apellido_paterno VARCHAR(255) NOT NULL,
      apellido_materno VARCHAR(255) NOT NULL,
      fecha_nacimiento DATE,
      correo_electronico VARCHAR(255) NOT NULL,
      telefono VARCHAR(20) NOT NULL
    )
  `;

  connection.query(createTableQuery, (err) => {
    if (err) {
      // En caso de error al crear la tabla
      console.error("Error creating table:", err);
      return;
    }
  });

  console.log("Connected to the database!");
});

// Exportar la conexión a la base de datos para ser utilizada en otros módulos
module.exports = connection;
