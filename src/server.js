const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.static('public'));

// Replace with your actual API calls
app.get('/api/social-media-data', async (req, res) => {
    try {
        // Example: Fetching data from a placeholder API
        // Replace this URL with actual social media API endpoints
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
