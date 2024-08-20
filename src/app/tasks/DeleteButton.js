"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function DeleteButton({ id, setData }) {
  const router = useRouter();
  const handleDelete = async () => {
    console.log(id);
    const del = await fetch(
      `https://test-backend-node.onrender.com/task/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (del.ok) {
      console.log(id, " Deleted successfully");
      router.refresh();
    }
  };
  return (
    <button
      onClick={handleDelete}
      className="px-2 py-1 bg-red-600 text-white rounded text-xs"
    >
      del
    </button>
  );
}
