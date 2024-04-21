import express from 'express'
import fetch from 'node-fetch'
import axios from 'axios'
import { error } from 'console';


const app = express();
const PORT = 3000;

// Proxy endpoint to forward requests to the exchange rate API
app.get('/api/exchange-rates', async (req, res) => {
    const source = req.query.source        
    const apiURL =  `https://api.exchangerate-api.com/v4/latest/${source}`
    try {
        const response = await axios.get(apiURL);
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching exchange rates:', error);
        res.status(500).json({ error: 'Failed to fetch exchange rates' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
