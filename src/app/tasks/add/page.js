"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function TaskAdd() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "active",
    date: "",
  });
  const router = useRouter();
  const handleSubmit = async () => {
    const data = {
      title: form.title,
      description: form.description,
      status: form.status,
      date: form?.date
        ? new Date(form?.date).toISOString()
        : new Date().toISOString(),
    };

    const add = await fetch(`https://test-backend-node.onrender.com/task`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (add.ok) {
      console.log("added successfully");
      router.refresh();
      setForm({
        title: "",
        description: "",
        status: "active",
        date: "",
      });
    } else {
      console.log("not addedd . please check error");
    }
  };
  return (
    <div className="py-4">
      <input
        type="text"
        placeholder="Title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />
      <select
        value={form.status}
        onChange={(e) => setForm({ ...form, status: e.target.value })}
      >
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
      <input
        type="datetime-local"
        value={form.date}
        onChange={(e) => setForm({ ...form, date: e.target.value })}
      />
      <button
        onClick={handleSubmit}
        className="py-1 px-3 bg-cyan-500 text-white rounded"
      >
        Add
      </button>
    </div>
  );
}
