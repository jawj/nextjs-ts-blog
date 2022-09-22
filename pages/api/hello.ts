// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Client } from 'pg';
import * as db from 'zapatos/db';

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
  const result = await db.select('x', db.all).run(client);
  await client.end();

  res.status(200).json({ name: 'John Doe', result })
}
