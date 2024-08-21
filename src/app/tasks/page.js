"use client";

import React, { useEffect, useState } from "react";
import TaskAdd from "./add/page";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import { getOfflineTasks, updateMultipleTasks } from "@/lib/IDB/tasksStore";
import axios from "@/api/axios";
import useMode from "@/hooks/useMode";

export default function Tasks() {
  // const data = getOnlineTasks();
  const { isConnected, setIsConnected } = useMode();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   fetch(`https://test-backend-node.onrender.com/task`, {
  //     cache: "no-store",
  //   })
  //     .then((res) => res.json())
  //     .then(async (data) => {
  //       setMode("online");
  //       setData(data.result);
  //       await updateMultipleTasks(data.result);
  //     })
  //     .catch(async (err) => {
  //       console.log(err);
  //       setMode("offline");
  //       const offlineData = await getOfflineTasks();
  //       setData(offlineData);
  //     });
  // }, []);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/task`)
      .then(async (res) => {
        setIsConnected(true);
        setLoading(false);
        setData(res?.data?.result);
        await updateMultipleTasks(res?.data?.result);
      })
      .catch(async (err) => {
        console.log(err);
        if (err.message === "Network Error") {
          setIsConnected(false);
          setLoading(false);
          const offlineData = await getOfflineTasks();
          setData(offlineData);
        }
      });
  }, []);

  // console.log(data);

  return (
    <>
      {navigator.onLine ? "test - online" : "test -offline"}
      <br />
      {!isConnected ? "You are on offline Mode" : null}
      <TaskAdd setData={setData} />
      <table className="w-full md:w-auto">
        <thead>
          <tr className="[&>th]:p-2 [&>th]:border">
            <th>Title</th>
            {/* <th>Description</th>
            <th>Status</th>
            <th>Date</th> */}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {loading ? "loading.." : null}
          {data?.map((item, index) => (
            <tr key={index} className="[&>td]:p-2 [&>td]:border">
              <td>{item?.title}</td>
              {/* <td>{item?.description}</td>
              <td>{item?.status}</td>
              <td>{dayjs(item?.date).format("DD MMMM YYYY")}</td> */}
              <td>
                <div className="flex gap-2">
                  <EditButton />
                  <DeleteButton setData={setData} id={item?._id} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

// const getTasks = async () => {
//   const dynamicData = await fetch(
//     `https://test-backend-node.onrender.com/task`,
//     { cache: "no-store" }
//   );
//   return dynamicData.json();
// };
