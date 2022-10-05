import type { NextApiRequest, NextApiResponse } from 'next'
import { idFromToken } from '../../shared/tokens';
import withDbClient from '../../shared/withDbClient';
import * as db from 'zapatos/db';
import * as s from 'zapatos/schema';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {

  const notFound = () => res.redirect('/not-found');

  const { token } = req.query;
  if (typeof token !== 'string' || token.length > 32) return notFound();

  const id = idFromToken(token);
  if (isNaN(id)) return notFound();

  const [result] = await withDbClient(dbClient =>
    db.update('urls',
      {
        firstVisited: db.sql<s.urls.SQL>`coalesce(${"firstVisited"}, now())`,
        lastVisited: db.sql<s.urls.SQL>`now()`,
        timesVisited: db.sql<s.urls.SQL>`${"timesVisited"} + 1`,
      },
      { id },  // where condition
      { returning: ['url'] }
    ).run(dbClient)
  );
  if (result === undefined) return notFound();

  res.redirect(result.url);
}
