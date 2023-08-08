// Importar módulos y paquetes necesarios
const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");

// Rutas
router.post("/users", UserController.createUser);
router.get("/usersView", UserController.getAllUsers);

// Exportar el enrutador para ser utilizado en otros módulos
module.exports = router;
