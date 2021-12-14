import pkg from 'pg';
const { Pool } = pkg;

const connectionString = process.env.PG_CONNECTIONSTRING;  //zugriff auf diese speziellen daten

const pool = new Pool({
  connectionString,
})

export default pool