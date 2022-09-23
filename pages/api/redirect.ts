import type { NextApiRequest, NextApiResponse } from 'next'
import { idFromToken } from '../../shared/tokens';
import withDbClient from '../../shared/withDbClient';
import * as db from 'zapatos/db';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  
  const notFound = () => res.redirect('/not-found');
  const { token } = req.query;
  if (typeof token !== 'string' || token.length > 32) return notFound();
  
  const id = idFromToken(token);
  if (isNaN(id)) return notFound();
  
  const result = await withDbClient(dbClient => 
    db.selectOne('urls', { id }, { columns: ['url'] }).run(dbClient)
  );
  if (result === undefined) return notFound();
  
  res.redirect(result.url);
}
