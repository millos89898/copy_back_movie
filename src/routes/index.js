const express = require('express');
const routerMovie = require('./movies.router');
const routerGenre = require('./genre.router');
const routerActor = require('./actor.router');
const routerDirector = require('./director.router');
const router = express.Router();

// colocar las rutas aquí
router.use('/movies',routerMovie)
router.use('/genres',routerGenre)
router.use('/actors',routerActor)
router.use('/directors',routerDirector)

module.exports = router;