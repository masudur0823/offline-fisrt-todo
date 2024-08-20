import { initDB, TASK_STORE } from "./initDB";

export async function addTask(task) {
  const db = await initDB();
  return db.add(TASK_STORE, task);
  // pp.then((item) => console.log("task===:", item));
}

export async function addMultipleTasks(tasks) {
  console.log(tasks);
  const db = await initDB();

  const tx = db.transaction(TASK_STORE, "readwrite");
  const store = tx.objectStore(TASK_STORE);

  for (const task of tasks) {
    await store.add(task);
  }

  await tx.done;
}

export async function getOnlineTasks() {
  try {
    const res = await fetch(`https://test-backend-node.onrender.com/task`, {
      cache: "no-store",
    });
    const data = res.json();
    console.log(data);
    // await addMultipleTasks(data?.result);
    return data;
  } catch (error) {
    console.log("not ok-------");
  }
}

export async function getOfflineTasks() {
  const db = await initDB();
  return db.getAll(TASK_STORE);
}

export async function updateTask(task) {
  const db = await initDB();
  return db.put(TASK_STORE, task);
}

export async function updateMultipleTasks(tasks) {
  const db = await initDB();

  const tx = db.transaction(TASK_STORE, "readwrite");
  const store = tx.objectStore(TASK_STORE);

  for (const task of tasks) {
    await store.put(task);
  }

  await tx.done;
}

export async function deleteTask(id) {
  const db = await initDB();
  return db.delete(TASK_STORE, id);
}
