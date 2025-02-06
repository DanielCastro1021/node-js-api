const express = require('express');
const app = express();
const port = 3000;
const userController = require('./controllers/userController');

// Middleware to parse JSON bodies
app.use(express.json());

// Simple route
app.get('/', (req, res) => {
    res.send('Hello, API!');
});

// Simple route with controller
app.use('/api', userController);

// Start the server
app.listen(port, () => {
    console.log(`API is running on http://localhost:${port}`);
});
