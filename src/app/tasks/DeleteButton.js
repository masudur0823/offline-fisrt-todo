"use client";

import axios from "@/api/axios";
import useMode from "@/hooks/useMode";
import {
  deleteTask,
  getOfflineTasks,
  updateMultipleTasks,
} from "@/lib/IDB/tasksStore";
// import { useRouter } from "next/navigation";
import React from "react";

export default function DeleteButton({ id, setData }) {
  const { setIsConnected } = useMode();
  // const router = useRouter();
  const handleDelete = async () => {
    // console.log(id);

    axios
      .delete(`/task/${id}`)
      .then(async (res) => {
        console.log(res);
        if (res.status === 200) {
          axios.get(`/task`).then(async (res) => {
            setIsConnected(true);
            setData(res?.data.result);
            await updateMultipleTasks(res?.data.result);
          });
          await deleteTask(id);
        }
      })
      .catch(async (err) => {
        if (err.message === "Network Error") {
          setIsConnected(false);
          await deleteTask(id);
          const offlineData = await getOfflineTasks();
          setData(offlineData);
        }
        // setData(res?.data.result);
      });
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
