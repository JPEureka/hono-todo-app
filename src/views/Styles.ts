import { css } from "hono/css";
export const toDoList__Container = css`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;
export const toDoList__Header = css`
	margin-top: 2rem;
	max-width: fit-content;
	margin-inline: auto;
`;
export const toDoList__Add = css`
	max-width: fit-content;
	margin-inline: auto;
	display: inline-flex;
	margin-top: 1rem;
	margin-bottom: 1rem;
	gap: 0.25rem;
`;
export const toDoList__Add_btn = css``;
export const toDoList__Items = css`
	margin: auto;
	display: flex;
	flex-direction: column;
	gap: 0.25rem;
`;
export const toDoList__Item = css`
	display: flex;
	flex-direction: row;
	gap: 0.25rem;
	align-items: center;
	justify-content: center;
`;
export const toDoList__Item_id = css`
	font-weight: bold;
	flex: 0 0 20px;
	text-align: center;
`;
export const toDoList__Item_name = css`
	font-size: 1rem;
	flex: 0 0 200px;
	padding: 2px;
	border: solid 0.1rem;
	min-height: 1rem;
`;

export const toDoList__Item__status = css`
	flex: 0 0 100px;
	text-align: center;
`;

export const toDoList__Item__editBtn = css`
	flex: 0 0 100px;
`;
export const toDoList__Item__deleteBtn = css`
	flex: 0 0 100px;
`;
