import { initDB, USER_STORE } from "./initDB";

export async function addUser(user) {
  const db = await initDB();
  return db.add(USER_STORE, user);
  // pp.then((item) => console.log("user===:", item));
}

export async function addMultipleUsers(users) {
  const db = await initDB();

  const tx = db.transaction(USER_STORE, "readwrite");
  const store = tx.objectStore(USER_STORE);

  for (const user of users) {
    await store.add(user);
  }

  await tx.done;
}

export async function getUsers() {
  const db = await initDB();
  return db.getAll(USER_STORE);
}

export async function updateUser(user) {
  const db = await initDB();
  return db.put(USER_STORE, user);
}

export async function deleteUser(id) {
  const db = await initDB();
  return db.delete(USER_STORE, id);
}
