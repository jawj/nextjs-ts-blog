import type { NextApiRequest, NextApiResponse } from 'next'
import { idFromToken } from '../../shared/tokens';
import withDbClient from '../../shared/withDbClient';
import * as db from 'zapatos/db';

type Data = { shortUrl: string; } | { error: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { token } = req.query;
  if (typeof token !== 'string') return res.status(400).json({ error: 'No token was supplied.' });
  if (token.length > 32) return res.status(400).json({ error: 'Token is too long.' });
  
  const id = idFromToken(token);
  if (isNaN(id)) return res.status(400).json({ error: 'Token isn’t valid.' });

  const result = await withDbClient(dbClient => 
    db.selectOne('urls', { id }, { columns: ['url'] }).run(dbClient)
  );

  if (result === undefined) return res.redirect('/not-found');
  res.redirect(result.url);
}
