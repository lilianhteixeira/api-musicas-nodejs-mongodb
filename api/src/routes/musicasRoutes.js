const express = require('express');
const router = express.Router();
const controller = require('../controllers/musicasController')

router.get('/musicas', controller.getMusicas)

router.post('/musicas', controller.addMusica)

router.get('/musicas/:id', controller.getMusicasbyId)

router.put('/musicas/:id', controller.atualizaMusica)

router.delete('/musicas/:id', controller.deleteMusica)

module.exports = router;