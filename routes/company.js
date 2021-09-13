const express = require('express');
const router = express.Router();
const sequelize = require('../db');
const permission = require('../middlewares/permission')

// Get all company
router.get('/', permission('admin', 'client'), async (req, res) => {
  const products = await sequelize.models.companies.findAndCountAll();
  return res.status(200).json({ data: companies });
});

// Create a new company'
router.post('/', permission('admin', 'client'), async (req, res) => {
  const { body } = req;
  const product = await sequelize.models.companies.create({
    name: body.name,
    description: body.description,
    
  });
  await product.save();
  return res.status(201).json({ data: companies })
});

// Update a company by id
router.put('/:id', permission('admin'), async (req, res) => {
  const { body, params: { id } } = req;
  const product = await sequelize.models.products.findByPk(id);
  if (!product) {
    return res.status(404).json({ code: 404, message: 'Product not found' });
  }
  const updatedProduct = await product.update({
    name: body.name,
    description: body.description,
    
  });
  return res.json({ data: updatedProduct });
});

// Delete a company by id
router.delete('/:id', permission('admin'), async (req, res) => {
  const { params: { id } } = req;
  const product = await sequelize.models.products.findByPk(id);
  if (!product) {
    return res.status(404).json({ code: 404, message: 'Product not found' });
  }
  await product.destroy();
  return res.json();
});

module.exports = router;