import { openDB } from "idb";

const DB_NAME = "todoDB";
const STORE_NAME = "todos";

async function initDB() {
  return openDB(DB_NAME, 2, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, {
          keyPath: "id",
          autoIncrement: true,
        });
      }
    },
  });
}

export async function addTodo(todo) {
  const db = await initDB();
  return db.add(STORE_NAME, todo);
}

export async function getTodos() {
  const db = await initDB();
  return db.getAll(STORE_NAME);
}

export async function updateTodo(todo) {
  const db = await initDB();
  return db.put(STORE_NAME, todo);
}

export async function deleteTodo(id) {
  const db = await initDB();
  return db.delete(STORE_NAME, id);
}
