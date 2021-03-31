const express = require('express');
const router = express.Router();

const clienteController = require('../controllers/clientesController');

router.get('/', clienteController.list);

module.exports = router;