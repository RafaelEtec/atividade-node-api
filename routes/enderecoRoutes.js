const express = require("express");
const router = express.Router();
const enderecoController = require("../controllers/enderecoController");

router.get("/cep/:cep", enderecoController.findCEP);
router.get("/enderecos", enderecoController.getEnderecos);
router.get("/enderecos/:id", enderecoController.getEnderecoByID);
router.post("/enderecos", enderecoController.postEndereco);

module.exports = router;