
import { Client } from 'pg';

export default async function withDbClient<T>(fn: (client: Client) => T): Promise<T> {
  const client = new Client({ connectionString: process.env.DB_URL });
  await client.connect();

  try {  
    return fn(client);

  } finally {
    await client.end();
  }
}