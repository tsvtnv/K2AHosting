import pg from 'pg';

// Use the provided connection string
const connectionString = process.env.DATABASE_URL || 'postgres://postgres:3Ukg4KaULYV5aJLBYGdOYam91U7X9fKqfyOi45h3Sy2ZXVaUMaDbgPIOUIrMSTBs@51.77.222.110:5429/postgres';

const pool = new pg.Pool({
  connectionString,
});

export const query = (text, params) => pool.query(text, params);