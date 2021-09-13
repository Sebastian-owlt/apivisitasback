const { DataTypes } = require('sequelize');
const associated = require('./associated');

module.exports = (sequelize) => sequelize.define('companies', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: DataTypes.STRING,
  description: DataTypes.TEXT,
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
});