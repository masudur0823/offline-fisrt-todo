import { initDB, TODO_STORE } from "./initDB";

export async function addTodo(todo) {
  const db = await initDB();
  return db.add(TODO_STORE, todo);
}

export async function getTodos() {
  const db = await initDB();
  return db.getAll(TODO_STORE);
}

export async function updateTodo(todo) {
  const db = await initDB();
  return db.put(TODO_STORE, todo);
}

export async function deleteTodo(id) {
  const db = await initDB();
  return db.delete(TODO_STORE, id);
}
