import { css } from 'hono/css';
export const todoList__container = css`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
export const todoList__header = css`
  margin-top: 2rem;
  max-width: fit-content;
  margin-inline: auto;
`;
export const todoList__add = css`
  max-width: fit-content;
  margin-inline: auto;
  display: inline-flex;
  margin-top: 1rem;
  margin-bottom: 1rem;
  gap: 0.25rem;
`;
export const todoList__add__btn = css``;
export const todoList__items = css`
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;
export const todoItem = css`
  display: flex;
  flex-direction: row;
  gap: 0.25rem;
  align-items: center;
  justify-content: center;
`;
export const todoItem__id = css`
  font-weight: bold;
  flex: 0 0 20px;
  text-align: center;
`;
export const todoItem__name = css`
  font-size: 1rem;
  flex: 0 0 200px;
  padding: 2px;
  border: solid 0.1rem;
  min-height: 1rem;
`;

export const todoItem__status = css`
  flex: 0 0 100px;
  text-align: center;
`;

export const todoItem__edit__btn = css`
  flex: 0 0 100px;
`;
export const todoItem__delete__btn = css`
  flex: 0 0 100px;
`;
