import type { NextApiRequest, NextApiResponse } from 'next'
import { tokenFromId } from '../shared/tokens';
import * as db from 'zapatos/db';
import withDbClient from '../shared/withDbClient';

type Data = { shortUrl: string; } | { error: string };

const urlMaxLength = 4096;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { url } = req.query;

  if (typeof url !== 'string') return res.status(400).json({ error: 'No URL supplied' });
  if (url.length > urlMaxLength) return res.status(400).json({ error: `URL exceeds ${urlMaxLength} characters` });
  try {
    void new URL(url);
  } catch {
    return res.status(400).json({ error: 'Invalid URL' });
  }

  const { id } = await withDbClient(dbClient => 
    db.insert('urls', { url }, { returning: ['id'] }).run(dbClient)
  );

  const shortUrl = tokenFromId(id);
  res.status(200).json({ shortUrl });
}
