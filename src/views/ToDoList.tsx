import {
  todoItem,
  todoItem__id,
  todoItem__name,
  todoItem__status,
  todoItem__edit__btn,
  todoItem__delete__btn,
  todoList__container,
  todoList__add,
  todoList__add__btn,
  todoList__items,
  todoList__header,
} from './styles';
import { Style, cx } from 'hono/css';
import { ToDoItemType } from '../types';

export const ToDoItem = ({ id, taskName, status }: ToDoItemType) => {
  return (
    <div class={todoItem} key={id}>
      <Style />
      <span data-id='id' class={cx(todoItem__id, 'item-id')}>
        {id}
      </span>
      <span class={cx(todoItem__name, 'item-name')}>{taskName}</span>
      <span class={cx(todoItem__status, 'item-status')}>{status}</span>
      <button data-id={id} class={cx(todoItem__edit__btn, 'edit-btn')}>
        Edit
      </button>
      <button data-id={id} class={cx(todoItem__delete__btn, 'delete-btn')}>
        Delete
      </button>
    </div>
  );
};
export const ToDoList = ({ list }: { list: ToDoItemType[] }) => {
  return (
    <div class={todoList__container}>
      <Style />
      {!list.length && <h4 class={todoList__header}>No todo item yet!</h4>}
      <div class={todoList__add}>
        <input id='newTaskInput' placeholder='Add new task' />
        <button id='addNewTaskBtn' class={todoList__add__btn}>
          Add
        </button>
      </div>
      <div class={todoList__items}>
        {list.length > 0 && list.map((item) => <ToDoItem {...item} />)}
      </div>
    </div>
  );
};
