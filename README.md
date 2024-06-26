```
npm install
npm run dev
```

```
open http://localhost:3000
```

Basic auth:

- hono/just4fun

To view all task

- http://localhost:3000/todo

To view task #id

- http://localhost:3000/todo/:id

To add task

- POST http://localhost:3000/todo
- body: { name: ${taskName} }

To edit task #id

- PUT http://localhost:3000/todo/:id
- body: { newName: ${newTaskName}, newStatus: ${newTaskStatus} }

To delete task #id

- DELETE http://localhost:3000/todo/:id
