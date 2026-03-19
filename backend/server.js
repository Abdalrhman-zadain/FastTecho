import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = Number(process.env.PORT) || 3001;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const JOBS_FILE = path.join(__dirname, 'jobs.json');

app.use(cors());
app.use(bodyParser.json());

// Helper to read jobs from file
function readJobs() {
    if (!fs.existsSync(JOBS_FILE)) return [];
    const data = fs.readFileSync(JOBS_FILE, 'utf-8');
    try {
        return JSON.parse(data);
    } catch {
        return [];
    }
}

// Helper to write jobs to file
function writeJobs(jobs) {
    fs.writeFileSync(JOBS_FILE, JSON.stringify(jobs, null, 2));
}

// Get all jobs
app.get('/jobs', (req, res) => {
    const jobs = readJobs();
    res.json(jobs);
});

// Add a new job
app.post('/jobs', (req, res) => {
    const { title, description, location, type } = req.body;
    if (!title || !description || !location || !type) {
        return res.status(400).json({ error: 'Missing fields' });
    }
    const jobs = readJobs();
    const newJob = { title, description, location, type };
    jobs.push(newJob);
    writeJobs(jobs);
    res.status(201).json(newJob);
});

app.listen(PORT, () => {
    console.log(`Backend server running on http://localhost:${PORT}`);
}).on('error', (error) => {
    if (error.code === 'EADDRINUSE') {
        console.error(`Port ${PORT} is already in use. Stop the other process or start with a different PORT value.`);
        process.exit(1);
    }
    throw error;
});
