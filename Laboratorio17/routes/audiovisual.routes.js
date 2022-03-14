const express = require('express');
const router = express.Router();

const visualController = require('../controllers/audioVisual_controller');

//Para películas
router.get('/nuevaPeli', visualController.get_nueva_peli);
router.post('/nuevaPeli', visualController.post_nueva_peli);
router.get('/:idPelicula', visualController.getPelicula);

//Para series
router.get('/nuevaSerie', visualController.get_nueva_serie);
router.post('/nuevaSerie', visualController.post_nueva_serie);

//Para caricaturas
router.get('/nuevaCaricatura', visualController.get_nueva_caricatura);
router.post('/nuevaCaricatura', visualController.post_nueva_caricatura);

router.use('/', visualController.principal);

module.exports = router;