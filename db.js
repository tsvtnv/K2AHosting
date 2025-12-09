import pg from 'pg';

// Handle ESM import of CommonJS module
const { Pool } = pg;

const connectionString = process.env.DATABASE_URL || 'postgres://postgres:3Ukg4KaULYV5aJLBYGdOYam91U7X9fKqfyOi45h3Sy2ZXVaUMaDbgPIOUIrMSTBs@51.77.222.110:5429/postgres';

const pool = new Pool({
  connectionString,
});

// Test connection on startup
pool.connect()
  .then(client => {
    console.log('Connected to PostgreSQL database successfully');
    client.release();
  })
  .catch(err => {
    console.error('Error connecting to database:', err.message);
  });

export const query = (text, params) => pool.query(text, params);