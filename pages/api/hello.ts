// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Client } from 'pg';

type Data = {
  name: string,
  result: any,
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const client = new Client({ connectionString: process.env.DB_URL });
  await client.connect();
  const { rows } = await client.query('select * from x;');
  await client.end();

  res.status(200).json({ name: 'John Doe', result: rows })
}
