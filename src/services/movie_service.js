const axios = require('axios')
const { log } = require("../db/models")
const moment = require("moment-timezone")

const MovieServices = {

  searchMovies: async (title, page, urlPath) => {

    try {
      // Save data logs
      await log.create({ url: urlPath, date: moment() })

      let result = []
      const data = await axios.get(`https://www.omdbapi.com/?apikey=faf7e5bb&s=${title}&page=${page}`)
      result = data.data.Search

      return result

    } catch (e) {
      throw new Error(e.message)
    }
  },

  detailMovies: async (imdbID, title, page, urlPath) => {

    try {
      // Save data logs
      await log.create({ url: urlPath, date: moment() })

      const data = await axios.get(`https://www.omdbapi.com/?apikey=faf7e5bb&s=${title}&page=${page}`)
      let result = data.data.Search

      let obj = {}
      result.forEach(item => {
        if (item.imdbID == imdbID) {
          obj.Title = item.Title
          obj.Year = item.Year
          obj.imdbID = item.imdbID
          obj.Type = item.Type
          obj.Poster = item.Poster
        }
      });

      return obj
    } catch (e) {
      throw new Error(e.message)
    }
  },

}

module.exports = MovieServices