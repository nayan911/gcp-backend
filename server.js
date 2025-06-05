const express = require('express');
const dotenv = require('dotenv');
const db = require('./sql');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send("GCP Backend API is running");
});

app.get('/api/details', async (req, res) => {
    try {
        const details = await db.getAllDetails();
        res.json(details);
    } catch (error) {
        console.error('Error fetching details:', error);
        res.status(500).json({ error: 'Failed to fetch details' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});