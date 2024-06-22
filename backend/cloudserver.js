// server.js
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());


app.get('/', (req, res) => {
    res.send('Serial Data Server');
});
app.get('/api/data', (req, res) => { //Serial data was sent by local server
    res.json({ data: latestData }); // Return latestData as JSON response
});

// Start the server
const portNumber = 3001;
app.listen(portNumber, () => {
    console.log(`Server is running on http://localhost:${portNumber}`);
});