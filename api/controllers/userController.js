const express = require('express');
const router = express.Router();

router.get('/users', (req, res) => {
    res.json([
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
    ]);
});

router.post('/users', (req, res) => {
    const newUser = req.body;
    // Here you would usually save the user to a database
    res.status(201).json(newUser); // Respond with the newly created user
});

router.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const updatedUser = req.body;
    // Update the user in the database with the given ID
    res.json({ id, ...updatedUser });
});

router.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    // Delete the user from the database
    res.status(204).send(); // No content to return after deletion
});

module.exports = router;