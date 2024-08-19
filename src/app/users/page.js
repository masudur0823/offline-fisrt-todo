"use client";
import { useState, useEffect } from "react";
import {
  addUser,
  addMultipleUsers,
  getUsers,
  updateUser,
  deleteUser,
} from "../../lib/IDB/usesStore";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [userForm, setUserForm] = useState({
    name: "",
    email: "",
    password: "",
    age: null,
    dob: "",
    role: "user",
    status: true,
  });

  useEffect(() => {
    async function fetchUsers() {
      const allUsers = await getUsers();
      setUsers(allUsers);
    }
    fetchUsers();
  }, []);

  const handleAddUser = async () => {
    const id = await addUser({ ...userForm });
    console.log(id);
    console.log({ ...userForm });
    setUsers([...users, { id, ...userForm }]);
    setUserForm({
      name: "",
      email: "",
      password: "",
      age: null,
      dob: "",
      role: "user",
      status: true,
    });
  };

  console.log("users---:", users);

  const handleMultiUsers = async () => {
    await addMultipleUsers([
      { name: "kalam1" },
      { name: "kalam2" },
      { name: "kalam3" },
    ]);

    const storedItems = await getUsers();
    setUsers(storedItems);
  };

  //   const handleToggleComplete = async (todo) => {
  //     todo.completed = !todo.completed;
  //     await updateTodo(todo);
  //     setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
  //   };

  const handleDeleteTodo = async (id) => {
    await deleteUser(id);
    setUsers(users.filter((t) => t.id !== id));
  };

  return (
    <div className="p-10">
      <button
        onClick={handleMultiUsers}
        className="bg-cyan-500 text-white px-5 py-2 border-t border-r border-b"
      >
        Multi User
      </button>
      <h1 className="text-3xl text-green-600 font-bold">User List</h1>
      <input
        type="text"
        value={userForm?.name}
        onChange={(e) => setUserForm({ ...userForm, name: e.target.value })}
        placeholder="User Name"
        className="border px-5 py-2"
      />

      <input
        type="text"
        value={userForm?.email}
        onChange={(e) => setUserForm({ ...userForm, email: e.target.value })}
        placeholder="Email"
        className="border px-5 py-2"
      />

      <button
        onClick={handleAddUser}
        className="bg-cyan-500 text-white px-5 py-2 border-t border-r border-b"
      >
        Add User
      </button>

      <ol className="list-decimal px-10">
        {users.map((user) => (
          <li key={user.id}>
            <div className="flex gap-2">
              {user?.name} - {user?.email}
              <button
                onClick={() => handleDeleteTodo(user.id)}
                className="bg-red-600 text-white px-2 py-1 rounded text-xs"
              >
                Del
              </button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
