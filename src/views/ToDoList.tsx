/** @jsx jsx */
/** @jsxImportSource hono/jsx */
import { render } from "hono/jsx/dom";
import {
	toDoList__Item,
	toDoList__Container,
	toDoList__Item_name,
	toDoList__Items,
	toDoList__Item_id,
	toDoList__Item__status,
	toDoList__Add,
	toDoList__Add_btn,
	toDoList__Item__editBtn,
	toDoList__Item__deleteBtn,
} from "./Styles";
import { Style, cx } from "hono/css";
import { ToDoItemType } from "../types";

export const ToDoItem = ({ id, taskName, status }: ToDoItemType) => {
	return (
		<div class={toDoList__Item} key={id}>
			<Style />
			<span data-id="id" class={cx(toDoList__Item_id, "item-id")}>
				{id}
			</span>
			<span class={cx(toDoList__Item_name, "item-name")}>{taskName}</span>
			<span class={cx(toDoList__Item__status, "item-status")}>{status}</span>
			<button data-id={id} class={cx(toDoList__Item__editBtn, "edit-btn")}>
				Edit
			</button>
			<button data-id={id} class={cx(toDoList__Item__deleteBtn, "delete-btn")}>
				Delete
			</button>
		</div>
	);
};
export const ToDoList = ({ list }: { list: ToDoItemType[] }) => {
	return (
		<div class={toDoList__Container}>
			<Style />
			{!list.length && <h4>No todo item yet!</h4>}
			<div class={toDoList__Add}>
				<input id="newTaskInput" placeholder="Add new task" />
				<button id="addNewTaskBtn" class={toDoList__Add_btn}>
					Add
				</button>
			</div>
			<div class={toDoList__Items}>
				{list.length && list.map((item) => <ToDoItem {...item} />)}
			</div>
		</div>
	);
};
