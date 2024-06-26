import { db } from '../db';
import { ToDoItemDB, ToDoItemType } from '../types';

export async function getTodos() {
  const list = db.prepare('SELECT * FROM todos').all() as ToDoItemDB[];
  return list?.map((item: ToDoItemDB) => {
    return { id: item.id, taskName: item.name, status: item.status };
  });
}

export async function getTodo(id: number): Promise<ToDoItemType | null> {
  const item = db.prepare('SELECT * FROM todos WHERE id = ?').get(id) as ToDoItemDB;
  return item ? { id: item.id, taskName: item.name, status: item.status } : null;
}

export function addTodo({
  taskName,
  status = 'OPEN',
}: {
  taskName: string;
  status?: string;
}): void {
  const query = db.prepare('INSERT INTO todos (name, status) VALUES (?, ?)');
  query.run(taskName, status);
}

export function editTodo({
  id,
  name,
  status,
}: {
  id: number;
  name?: string;
  status?: string;
}): void {
  if (!name && !status) {
    console.log('nothing to update!');
    return;
  }
  let query: any;
  if (name && status) {
    query = db.prepare('UPDATE todos SET name = (?), status = (?) WHERE id = (?)');
    query.run(name, status, id);
  } else if (name) {
    query = db.prepare('UPDATE todos SET name = (?) WHERE id = (?)');
    query.run(name, id);
  } else if (status) {
    query = db.prepare('UPDATE todos SET status = (?) WHERE id = (?)');
    query.run(status, id);
  }
}

export function deleteTodo(id: number): void {
  const query = db.prepare('DELETE FROM todos WHERE id = (?)');
  query.run(id);
}
