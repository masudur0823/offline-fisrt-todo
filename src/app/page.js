"use client";
import { useState, useEffect } from "react";
import {
  addTodo,
  getTodos,
  updateTodo,
  deleteTodo,
} from "../lib/IDB/todosStore";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    async function fetchTodos() {
      const allTodos = await getTodos();
      console.log("allTodos", allTodos);
      setTodos(allTodos);
    }
    fetchTodos();
  }, []);

  const handleAddTodo = async () => {
    if (newTodo.trim()) {
      const id = await addTodo({ text: newTodo, completed: false });
      setTodos([...todos, { id, text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const handleToggleComplete = async (todo) => {
    todo.completed = !todo.completed;
    await updateTodo(todo);
    setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
  };

  const handleDeleteTodo = async (id) => {
    await deleteTodo(id);
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl text-green-600 font-bold">Todo List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new todo"
        className="border px-5 py-2"
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            handleAddTodo();
          }
        }}
      />
      <button
        onClick={handleAddTodo}
        className="bg-cyan-500 text-white px-5 py-2 border-t border-r border-b"
      >
        Add Todo
      </button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="flex gap-2">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleComplete(todo)}
            />
            {todo.text}
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
