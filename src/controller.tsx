import { Hono } from 'hono';
// import { getCookie, setCookie, deleteCookie } from "hono/cookie";
import { basicAuth } from 'hono/basic-auth';
import { Content } from './views/Layout';

import { getTodos, getTodo, addTodo, editTodo, deleteTodo } from './services/handleTodos.js';

export const app = new Hono();

app.use(
  '/*',
  basicAuth({
    username: 'hono',
    password: 'just4fun',
  })
);

app.get('/', async (c) => {
  const results = await getTodos();
  const props = {
    siteData: {
      title: 'HONO TODO APP',
      list: results,
    },
  };
  return c.html(<Content {...props} />);
});

app.get('/todos', async (c) => {
  const results = await getTodos();
  const props = {
    siteData: {
      title: 'HONO TODO APP',
      list: results,
    },
  };
  return c.html(<Content {...props} />);
});

app.get('/todo/:id', async (c) => {
  const tid = c.req.param('id');
  const targetTask = await getTodo(Number(tid));
  if (!targetTask) return c.render(<h3>Task #{tid} Not Found</h3>);
  const props = {
    siteData: {
      title: 'HONO TODO APP',
      list: [targetTask],
    },
  };
  return c.html(<Content {...props} />);
});

app.post('/todo', async (c) => {
  const body = await c.req.json();
  await addTodo({ taskName: body.name });
  return c.text('post!', body);
});

app.put('/todo/:id', async (c) => {
  const body = await c.req.json();
  const tid = c.req.param('id');
  await editTodo({
    id: Number(tid),
    name: body.newName,
    status: body.newStatus,
  });
  return c.text('put!', body);
});

app.delete('/todo/:id', async (c) => {
  const tid = c.req.param('id');
  console.log('hello~', tid);
  await deleteTodo(Number(tid));
  return c.text('deleted!');
});
