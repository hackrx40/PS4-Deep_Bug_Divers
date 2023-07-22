const express = require('express');
const cors = require('cors'); // Import the 'cors' package
const path = require('path');
const app = express();

// Use the 'cors' middleware to enable CORS
app.use(cors());

// Define the path to the JSON file
const dataPath = path.join(__dirname, 'data.json');

// Serve the JSON file as a response
app.get('/api/data', (req, res) => {
  res.sendFile(dataPath);
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
