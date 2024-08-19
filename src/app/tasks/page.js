import React from "react";
import TaskAdd from "./add/page";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";

export default async function Tasks() {
  const data = await getTasks();
  return (
    <>
      <TaskAdd />
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
          {data?.result?.map((item, index) => (
            <tr key={index} className="[&>td]:p-2 [&>td]:border">
              <td>{item?.title}</td>
              {/* <td>{item?.description}</td>
              <td>{item?.status}</td>
              <td>{dayjs(item?.date).format("DD MMMM YYYY")}</td> */}
              <td>
                <div className="flex gap-2">
                  <EditButton />
                  <DeleteButton id={item?._id} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

const getTasks = async () => {
  const dynamicData = await fetch(
    `https://test-backend-node.onrender.com/task`,
    { cache: "no-store" }
  );
  return dynamicData.json();
};
