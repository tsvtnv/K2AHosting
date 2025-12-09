import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import { query } from './db.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Serve static files from the build directory
app.use(express.static(path.join(__dirname, 'dist')));

// --- DATABASE INIT ---
const initDb = async () => {
  try {
    await query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    // Seed a server table for demo purposes if needed, 
    // but we will simulate server data in memory for this "Pterodactyl" integration demo
    // since we aren't connecting to a real Pterodactyl instance yet.
    console.log('Database initialized');
  } catch (err) {
    console.error('Error initializing DB:', err);
  }
};
initDb();

// --- PTERODACTYL MOCK STORE ---
// In a real app, this would query the Pterodactyl API.
const mockServers = new Map();

// Initialize some mock servers for any user
const getMockServers = (userId) => {
  if (!mockServers.has(userId)) {
    mockServers.set(userId, [
      { id: 101, name: 'FiveM Production', game: 'GTA V', status: 'online', ip: '192.168.1.5:30120', cpu: 12, ram: 45, disk: 20 },
      { id: 102, name: 'Minecraft SMP', game: 'Minecraft', status: 'offline', ip: '192.168.1.5:25565', cpu: 0, ram: 0, disk: 5 }
    ]);
  }
  return mockServers.get(userId);
};

// --- AUTH ROUTES ---

app.post('/api/auth/signup', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // Check if user exists
    const userCheck = await query('SELECT * FROM users WHERE email = $1', [email]);
    if (userCheck.rows.length > 0) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Insert user (In production, hash passwords with bcrypt!)
    const result = await query(
      'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id, name, email',
      [name, email, password]
    );
    
    const user = result.rows[0];
    res.json({ user, token: 'fake-jwt-token-' + user.id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await query('SELECT * FROM users WHERE email = $1', [email]);
    if (result.rows.length === 0) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const user = result.rows[0];
    // In production, compare hashed password
    if (user.password !== password) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const cleanUser = { id: user.id, name: user.name, email: user.email };
    res.json({ user: cleanUser, token: 'fake-jwt-token-' + user.id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// --- SERVER ROUTES ---

app.get('/api/servers', (req, res) => {
  // Mock authentication check
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: 'Unauthorized' });
  
  // Extract user ID from fake token (format: "Bearer fake-jwt-token-ID")
  const userId = parseInt(authHeader.split('-').pop() || '0');
  
  const servers = getMockServers(userId);
  res.json(servers);
});

app.post('/api/server/:id/power', (req, res) => {
  const { id } = req.params;
  const { signal } = req.body; // 'start', 'stop', 'restart'
  const authHeader = req.headers.authorization;
  const userId = parseInt(authHeader.split('-').pop() || '0');
  
  const servers = getMockServers(userId);
  const server = servers.find(s => s.id === parseInt(id));
  
  if (!server) return res.status(404).json({ error: 'Server not found' });

  // Simulate Pterodactyl power actions
  if (signal === 'start') {
    server.status = 'starting';
    setTimeout(() => { server.status = 'online'; server.cpu = 45; server.ram = 60; }, 5000);
  } else if (signal === 'stop') {
    server.status = 'stopping';
    setTimeout(() => { server.status = 'offline'; server.cpu = 0; server.ram = 0; }, 3000);
  } else if (signal === 'restart') {
    server.status = 'stopping';
    setTimeout(() => { 
      server.status = 'starting'; 
      setTimeout(() => { server.status = 'online'; server.cpu = 50; server.ram = 55; }, 5000);
    }, 2000);
  } else if (signal === 'kill') {
      server.status = 'offline';
      server.cpu = 0;
      server.ram = 0;
  }

  res.json({ status: server.status });
});

app.get('/api/server/:id/console', (req, res) => {
    // Generate fake logs based on server status
    const logs = [
        "[10:20:01] [Server thread/INFO]: Starting minecraft server version 1.20.4",
        "[10:20:01] [Server thread/INFO]: Loading properties",
        "[10:20:01] [Server thread/INFO]: Default game type: SURVIVAL",
        "[10:20:01] [Server thread/INFO]: Generating keypair",
        "[10:20:02] [Server thread/INFO]: Starting Minecraft server on *:25565",
        "[10:20:02] [Server thread/INFO]: Using default channel type",
        "[10:20:05] [Server thread/INFO]: Preparing level \"world\"",
        "[10:20:06] [Server thread/INFO]: Preparing start region for dimension minecraft:overworld",
        "[10:20:08] [Server thread/INFO]: Time elapsed: 2453ms",
        "[10:20:08] [Server thread/INFO]: Done (4.231s)! For help, type \"help\"",
    ];
    res.json({ logs: logs.join('\n') });
});

app.get('/api/health', async (req, res) => {
  try {
    const result = await query('SELECT NOW()');
    res.json({ status: 'ok', db_time: result.rows[0].now });
  } catch (err) {
    console.error('Database health check failed:', err);
    // Return OK even if DB fails for the frontend to load (graceful degradation)
    res.json({ status: 'ok', db: 'disconnected' });
  }
});

// Handle React routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});