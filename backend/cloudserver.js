const express = require('express');
const cors = require('cors');
const app = express();
const port = 3002;

let latestData = '';

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());

// Endpoint to receive data from the local server
app.post('/api/data', (req, res) => {
    try {
        // Log incoming request
        console.log('Incoming data:', req.body);

        // Validate incoming data
        if (!req.body || !req.body.data) {
            console.error('Invalid data format received');
            return res.status(400).send('Invalid data format');
        }

        // Update the latest data
        latestData = req.body.data;
        console.log('Received data:', latestData);

        // Send success response
        res.sendStatus(200);
    } catch (error) {
        // Log the error
        console.error('Error processing data:', error);
        // Send error response
        res.status(500).send('Internal Server Error');
    }
});

// Endpoint to fetch the latest data
app.get('/api/data', (req, res) => {
    try {
        res.json({ data: latestData });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Start the cloud server
app.listen(port, () => {
    console.log(`Cloud server is running on http://localhost:${port}`);
});