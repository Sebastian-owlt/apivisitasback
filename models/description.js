const { DataTypes, Sequelize } = require('sequelize');

module.exports = (sequelize) => sequelize.define('description', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  content: DataTypes.TEXT,
  productId: {
    type: Sequelize.INTEGER,
    references: {
      model: 'company',
      key: 'id',
    },
    onDelete: 'CASCADE',
  },
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
});