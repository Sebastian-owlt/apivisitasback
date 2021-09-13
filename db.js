const { Sequelize } = require('sequelize')

const company = require('./models/company')
const associated = require('./models/associated')
const description = require('./models/description')
const users = require('./models/users')

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: process.env.DIALECT,
  logging: false,
});

const models = [
  company,
  associated,
  description,
  users,
]

for(let model of models){
  model(sequelize)
}

//const { company, associated,description } = sequelize.models
//reviews.belongsTo(company)

module.exports = sequelize