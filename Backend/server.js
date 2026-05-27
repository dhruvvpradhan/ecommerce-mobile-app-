const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const Product = require('./models/Product');
const mockProducts = require('./data/products');

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
let isDbConnected = false;

// Attempt to connect to MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/ecommerce-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected successfully');
  isDbConnected = true;
  seedDatabase();
}).catch((error) => {
  console.log('MongoDB connection failed. Running in MOCK DATA mode.');
  console.log('Error details:', error.message);
});

// Optional: Seed Database on startup if empty
const seedDatabase = async () => {
  try {
    const count = await Product.countDocuments();
    if (count === 0) {
      console.log('Seeding database with mock products...');
      // remove _id since mongoose auto generates it when inserting if we delete it, but wait, mock has string _id. Let's just insert as is or strip _id.
      const seedData = mockProducts.map(p => {
        const { _id, ...rest } = p;
        return rest;
      });
      await Product.insertMany(seedData);
      console.log('Database seeded!');
    }
  } catch (error) {
    console.error('Seeding error:', error);
  }
};

// --- API ROUTES ---

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
app.get('/api/products', async (req, res) => {
  if (isDbConnected) {
    try {
      const products = await Product.find({});
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: 'Server Error' });
    }
  } else {
    // Fallback to mock data if MongoDB is not running
    res.json(mockProducts);
  }
});

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
app.get('/api/products/:id', async (req, res) => {
  if (isDbConnected) {
    try {
      const product = await Product.findById(req.params.id);
      if (product) {
        res.json(product);
      } else {
        res.status(404).json({ message: 'Product not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Server Error' });
    }
  } else {
    // Fallback
    const product = mockProducts.find((p) => p._id === req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  }
});

// Mock order route
app.post('/api/orders', (req, res) => {
  // In a real app, save order to DB
  res.status(201).json({ message: 'Order placed successfully', orderId: Math.floor(Math.random() * 1000000) });
});

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});
