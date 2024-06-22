// server.js
const express = require('express');
const app = express();
const appPort = 3000;
const { SerialPort } = require('serialport')
const { ReadlineParser } = require('@serialport/parser-readline')
const cors = require('cors');
const port = new SerialPort({ path: 'COM3', baudRate: 9600 })
app.use(cors());

const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }))
parser.on('data', (data) => {
    latestData = data; // Update latestData with new data
});
app.get('/', (req, res) => {
    res.send('Serial Data Server');
});
app.get('/api/data', (req, res) => {
    res.json({ data: latestData }); // Return latestData as JSON response
});

// Start the server
const portNumber = 3001; // Choose a different port for the API server
app.listen(portNumber, () => {
    console.log(`Server is running on http://localhost:${portNumber}`);
});