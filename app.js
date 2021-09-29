const express = require("express")
const port = process.env.PORT || 3000
const cors = require('cors');

const app = express()
const router = require('./src/routes')
const errHandler = require('./src/middlewares/error_handler')

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', router)
app.use(errHandler)

app.listen(port, () => {
  console.log(`this app lisening on port ${port}`)
})

// Run for testing
// module.exports = app

// test connection
// const Sequelize = require('sequelize')
// const db = require('./src/config/database.json')
// const sequelize = new Sequelize(db.development)
// try {
//   sequelize.authenticate()
//   console.log('Connectiong has been estabilished successfully')
// } catch (e) {
//   console.log(e)
//   console.log('Unable to connect to database')
// }