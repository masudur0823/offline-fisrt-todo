"use client";

import axios from "@/api/axios";
import { deleteTask, updateMultipleTasks } from "@/lib/IDB/tasksStore";
// import { useRouter } from "next/navigation";
import React from "react";

export default function DeleteButton({ id, setData }) {
  // const router = useRouter();
  const handleDelete = async () => {
    // console.log(id);

    try {
      axios
        .delete(`/task/${id}`)
        .then(async (res) => {
          setData(res?.data.result);
          await deleteTask(id);
        })
        .catch(async (err) => {
          if (err.message === "Network Error") {
            await deleteTask(id);
            const offlineData = await getOfflineTasks();
            setData(offlineData);
          }
          // setData(res?.data.result);
        });
    } catch (error) {}
    // const del = await fetch(
    //   `https://test-backend-node.onrender.com/task/${id}`,
    //   {
    //     method: "DELETE",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   }
    // );
    // if (del.ok) {
    //   console.log(id, " Deleted successfully");
    //   // router.refresh();
    //   axios.get(`/task`).then(async (res) => {
    //     setData(res?.data.result);
    //     await deleteTask(id);
    //   });
    // }
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
