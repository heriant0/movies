'use-strict'

const router = require('express').Router()

const movieRouter = require('./movie_route')

router.use('/movies', movieRouter)

module.exports = router