import { initDB, TASK_STORE } from "./initDB";

export async function addUser(task) {
  const db = await initDB();
  return db.add(TASK_STORE, task);
  // pp.then((item) => console.log("task===:", item));
}

export async function addMultipleUsers(tasks) {
  const db = await initDB();

  const tx = db.transaction(TASK_STORE, "readwrite");
  const store = tx.objectStore(TASK_STORE);

  for (const task of tasks) {
    await store.add(task);
  }

  await tx.done;
}

export async function getUsers() {
  const db = await initDB();
  return db.getAll(TASK_STORE);
}

export async function updateUser(task) {
  const db = await initDB();
  return db.put(TASK_STORE, task);
}

export async function deleteUser(id) {
  const db = await initDB();
  return db.delete(TASK_STORE, id);
}
