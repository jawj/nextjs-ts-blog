import type { NextApiRequest, NextApiResponse } from 'next'
import { tokenFromId } from '../../shared/tokens';
import withDbClient from '../../shared/withDbClient';
import * as db from 'zapatos/db';

type Data = { token: string; } | { error: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const { url } = req.query;
  if (typeof url !== 'string') return res.status(400).json({ error: 'Please provide a URL.' });
  if (url.length > 4096) return res.status(400).json({ error: 'That URL’s too long.' });
  try {
    void new URL(url);
  } catch {
    return res.status(400).json({ error: 'That’s not a valid URL.' });
  }

  const { id } = await withDbClient(dbClient => 
    db.upsert('urls', { url }, 'url', { returning: ['id'] }).run(dbClient)
  );
  const token = tokenFromId(id);
  res.status(200).json({ token });
}
