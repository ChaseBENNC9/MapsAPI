// server.js
const express = require('express');
const app = express();
const axios = require('axios');
const { SerialPort } = require('serialport')
const { ReadlineParser } = require('@serialport/parser-readline')
const BASE_URL = 'http://localhost:3002';
const cors = require('cors');
const serial = new SerialPort({ path: 'COM2', baudRate: 9600 })
const CLOUD_URL = 'https://mapsbackend.onrender.com';
let latestData = '';
app.use(cors());

const parser = serial.pipe(new ReadlineParser({ delimiter: '\r\n' }))
parser.on('data', (data) => {
    latestData = data; // Update latestData with new data
        // Send data to cloud server
    axios.post(`https://mapsbackend.onrender.com/api/data`, { data })
    .then(response => console.log('Data sent successfully' ,data))
    .catch(error => console.error('Error sending data:', error));
});
app.get('/', (req, res) => {
    res.send('Serial Data Server');
});
app.get(`/api/data`, (req, res) => {
    res.json({ data: latestData }); // Return latestData as JSON response
});


// Start the server
const portNumber = 3001;
app.listen(portNumber, () => {
    console.log(`Server is running on http://localhost:${portNumber}`);
});