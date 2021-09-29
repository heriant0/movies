'use strict'

const router = require("express").Router()

const movieController = require('../controller/movie_controller')

router.get('/search', movieController.searchMovie)
router.get('/detail', movieController.detailMovie)

module.exports = router