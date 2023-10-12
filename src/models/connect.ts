import { Pool } from 'pg'
const pool = new Pool({
  user: 'postgres',
  host: 'postgres.c5yn7gowc3aw.ap-southeast-1.rds.amazonaws.com',
  database: 'first_test_db',
  password: 'Anhyeuem',
  port: 5432
});
export default pool
