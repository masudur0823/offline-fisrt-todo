import { openDB } from "idb";

const DB_NAME = "todoDB";
export const TODO_STORE = "todos";
export const USER_STORE = "users";

export async function initDB() {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(TODO_STORE)) {
        db.createObjectStore(TODO_STORE, {
          keyPath: "id",
          autoIncrement: true,
        });
      }
      if (!db.objectStoreNames.contains(USER_STORE)) {
        db.createObjectStore(USER_STORE, {
          keyPath: "id",
          autoIncrement: true,
        });
      }
    },
  });
}
