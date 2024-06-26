import { html } from 'hono/html';
import { Style } from 'hono/css';
import { ToDoList } from './ToDoList';
import { ToDoItemType } from '../types';
import { todoList__header } from './styles';
/** @jsx jsx */
/** @jsxImportSource hono/jsx */

interface SiteData {
  title: string;
  list: ToDoItemType[];
  children?: any;
}
const Layout = (props: SiteData) => html`
  <html>
    <head>
      <meta charset="UTF-8" />
      <title>${props.title}</title>
    </head>
    <body>
      <h3 class="${todoList__header}">${props.title}</h3>
      <hr />
      ${props.children}
    </body>
    <script defer>
      // Add
      document.getElementById('addNewTaskBtn').addEventListener('click', function () {
        const newTask = document.getElementById('newTaskInput').value;
        console.log('oh task', newTask);
        fetch('/todo', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name: newTask }),
        }).then(function () {
          window.location.reload();
        });
      });

      // Edit
      const editBtns = document.querySelectorAll('.edit-btn');
      editBtns.forEach((btn) => {
        btn.addEventListener('click', function () {
          const toEditTaskId = btn.getAttribute('data-id');
          console.log(btn);
          const toEditURI = '/todo/' + toEditTaskId;
          const promptInput = prompt('Enter comma to separate new task name and new status');
          const values = promptInput?.split(',');
          fetch(toEditURI, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ newName: values[0], newStatus: values[1] }),
          }).then(function () {
            window.location.reload();
          });
        });
      });

      // Delete
      const deleteBtns = document.querySelectorAll('.delete-btn');
      deleteBtns.forEach((btn) => {
        btn.addEventListener('click', function () {
          const toDeleteTaskId = btn.getAttribute('data-id');
          const toDeleteURI = '/todo/' + toDeleteTaskId;
          fetch(toDeleteURI, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
          }).then(function () {
            window.location.reload();
          });
        });
      });
    </script>
  </html>
`;

export const Content = (props: { siteData: SiteData }) => (
  <Layout {...props.siteData}>
    <Style />
    <ToDoList list={props.siteData.list} />
  </Layout>
);
