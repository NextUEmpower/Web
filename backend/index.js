require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

// Create Express app
const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error: ', err));

// Import routes
const logger = require('./middleware/logger');
const detailsRoutes = require('./routes/details');
const dataRoutes = require('./routes/data');

// Middleware
app.use(cors({
  origin: '*', // Allow all origins
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(logger);
app.use(express.json());

// Routes
app.use('/api', detailsRoutes);
app.use('/api/data', dataRoutes);

// Root route with detailed response
app.get('/', (req, res) => {
  res.json({ 
    message: 'Welcome to NextU API',
    status: 'Server is running',
    endpoints: {
      allData: '/api/data/all',
      users: '/api/data/users',
      courses: '/api/data/courses',
      colleges: '/api/data/colleges',
    }
  });
});

// Test route
app.get('/test', (req, res) => {
  res.json({ message: 'Test route is working' });
});

// Error handling middleware (should be last)
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ 
    error: 'Something broke!',
    message: err.message 
  });
});

// Handle 404
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

const PORT = process.env.PORT || 5000;

// Start server with error handling
const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on:`);
  console.log(`- Local: http://localhost:${PORT}`);
  console.log(`- Network: http://0.0.0.0:${PORT}`);
});

// Handle server errors
server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is already in use. Please use a different port.`);
    process.exit(1);
  } else {
    console.error('Server error:', err);
  }
});