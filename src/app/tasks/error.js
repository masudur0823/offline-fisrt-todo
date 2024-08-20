"use client";
import React, { useEffect } from "react";

export default function Error({ error }) {
  useEffect(() => {
    console.log(error);
    if (error) {
      console.log("not ok-------");
    }
  }, [error]);

  return <div>Something went wrong</div>;
}
