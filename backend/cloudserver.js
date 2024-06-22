const express = require('express');
const cors = require('cors');
const app = express();
const fs = require('fs');
const port = 3002;
const JSONPath = './historicalData.json';
let latestData = '';
let dataArray = [];

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());




// Read historical data from JSON file
if (fs.existsSync(JSONPath)) {
    try {
        const data = fs.readFileSync(JSONPath, 'utf-8');
        dataArray = JSON.parse(data).data || [];
        latestData = dataArray[0]

    } catch (error) {
        console.error('Error reading data file:', error);
    }
}
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
        console.log('Received data:', latestData);

        dataArray.unshift(req.body.data);
        console.log('Received data:', req.body.data);
        console.log('Updated data array:', dataArray);

        // Save the updated array to the file
        fs.writeFileSync(dataFilePath, JSON.stringify({ data: dataArray }));

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
