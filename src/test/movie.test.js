const request = require('supertest');
const app = require('../../app')


describe("GET /movies/search", () => {

  const params = {
    title: "Batman",
    page: 2
  }

  const expected = [{
    "Title": "Superman/Batman: Apocalypse",
    "Year": "2010",
    "imdbID": "tt1673430",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjk3ODhmNjgtZjllOC00ZWZjLTkwYzQtNzc1Y2ZhMjY2ODE0XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
  }]

  /**
 * Testing Search Movies
 * request params : title : Batman, page : 2
 * response: 200
 * response json : { code : 200, message: "Succesfully get data", data: array}
 */
  test("200 - Successfully get data", (done) => {

    request(app)
      .get(`/movies/search?title=${params.title}&page=${params.page}`)
      .send()
      .set('Accept', 'application/json')
      .then(response => {
        const { body, status } = response
        expect(status).toBe(200)
        expect(body).toHaveProperty("code", 200,)
        expect(body).toHaveProperty("message", "Succesfully get data")
        expect(body.data[0]).toHaveProperty("data", expected)

        done()
      })
      .catch(e => done(e))
  })

  /**
 * Testing Search Movies
 * request params : title : Batman, page : 2
 * response: 400
 * response json : { code : 200, message: "Data not found", data: []}
 */
  test("400 - Data not found", (done) => {
    
    request(app)
    .get(`/movies/search?title=${params.title}&page=${params.page}`)
    .send()
    .set('Accept', 'application/json')
    .then(response => {
      const { body, status } = response
      expect(status).toBe(400)
      expect(body).toHaveProperty("code", 400,)
      expect(body).toHaveProperty("message", "Data not found")
      expect(body).toHaveProperty("data", null)

      done()
    })
    .catch(e => done(e))
  })
})

describe("GET /movies/detail", () => {
  const params = {
    imdbID: "tt1673430",
    title: "Batman",
    page: 3
  }

  const expected = {
    "Title": "Superman/Batman: Apocalypse",
    "Year": "2010",
    "imdbID": "tt1673430",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjk3ODhmNjgtZjllOC00ZWZjLTkwYzQtNzc1Y2ZhMjY2ODE0XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
  }

  /**
 * Testing Detail Movie
 * request params : imdbID: "tt1673430", title : "Batman", page : 2
 * response: 200
 * response json : { code : 200, message: "Succesfully get data", data: object}
 */

  test("200 - Successfully get data", (done) => {
    request(app)
      .get(`/movies/detail?imdbID=${params.imdbID}&title=${params.title}&page=${params.page}`)
      .send()
      .set('Accept', 'application/json')
      .then(response => {
        const { body, status } = response
        expect(status).toBe(200)
        expect(body).toHaveProperty("code", 200,)
        expect(body).toHaveProperty("message", "Succesfully get data")
        expect(body).toHaveProperty("data", expected)

        done()
      })
      .catch(e => {
        done(e)
      })


  })
  /**
   * Testing Detail Movie
   * request params : imdbID: "tt1673430", title : "Batman", page : 2
   * response: 400
   * response json : { code : 400, message: "Data not found", data: null}
   */
  test("400 - Data not found", (done) => {
    request(app)
      .get(`/movies/detail?imdbID=xx123&title=${params.title}&page=${params.page}`)
      .send()
      .set('Accept', 'application/json')
      .then(response => {
        const { body, status } = response
        expect(status).toBe(200)
        expect(body).toHaveProperty("code", 400,)
        expect(body).toHaveProperty("message", "Data not found")
        expect(body).toHaveProperty("data", null)

        done()

      })
      .catch(e => done(e))
  })
})