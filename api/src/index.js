// Importar módulos y paquetes necesarios
require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const routes = require("./routes/routes");

// Middleware para permitir solicitudes desde el frontend.
app.use(cors());

// Middleware para parsear los datos del cuerpo de las peticiones como JSON.
app.use(bodyParser.json());

// Configuración de las rutas.
app.use("/", routes);

// Puerto en el cual se ejecutará el servidor. 
const port = process.env.PORT || 3000;

// Iniciar el servidor y escuchar en el puerto especificado.
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
