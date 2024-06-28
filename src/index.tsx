import { serve } from '@hono/node-server';
import { initDB } from './db';
import { app } from './controller';

const port = 3000;
console.log(`Server is running on port ${port}`);
initDB();
serve({
  fetch: app.fetch,
  port,
});
