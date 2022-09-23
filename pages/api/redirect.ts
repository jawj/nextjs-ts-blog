import type { NextApiRequest, NextApiResponse } from 'next'
import { idFromToken } from '../../shared/tokens';
import withDbClient from '../../shared/withDbClient';
import * as db from 'zapatos/db';

type Data = { shortUrl: string; } | { error: string };

const maxTokenLength = 32;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { token } = req.query;

  if (typeof token !== 'string') return res.status(400).json({ error: 'No token supplied' });
  if (token.length > maxTokenLength) return res.status(400).json({ error: `Token exceeds ${maxTokenLength} characters` });
  
  const id = idFromToken(token);

  try {
    const { url } = await withDbClient(dbClient => 
      db.selectExactlyOne('urls', { id }, { columns: ['url'] }).run(dbClient)
    );
    res.redirect(url);

  } catch {
    res.redirect('/not-found');
  }
}

