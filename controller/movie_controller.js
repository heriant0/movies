const utils = require('../helpers/response')
const services = require('../services/movie_service')

class Movie {

  static async searchMovie(req, res, next) {
    console.log('kesini')
    let { title, page } = req.query
    let url = req.url

    try {

      let result = await services.searchMovies(title, page, url)

      if (result.length > 0) {
        return utils.response(res, next, 200, "Succesfully get data", result)
      } else {
        throw {
          code: 400,
          name: "CustomValidation",
          message: "Data not found",
          data: null
        }
      }

    } catch (e) {
      next(e)
    }
  }

  static async detailMovie(req, res, next) {
    let { imdbID, title, page } = req.query
    let url = req.url

    try {
      let result = await services.detailMovies(imdbID, title, page, url)
      if (Object.keys(result).length == 0) {
        throw {
          code: 400,
          name: "CustomValidation",
          message: "Data not found",
          data: null
        }
      } else {
        return utils.response(res, next, 200, "Succesfully get data", result)
      }


    } catch (e) {
      next(e)
    }
  }
}

module.exports = Movie

