"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <div className="bg-cyan-400">
      <ul className="py-5 flex justify-center">
        <li>
          <Link
            href="/"
            className={pathname === "/" ? "bg-white py-4 px-5" : "py-4 px-5"}
          >
            Todos
          </Link>
        </li>
        <li>
          <Link
            href="/users"
            className={
              pathname === "/users" ? "bg-white py-4 px-5" : "py-4 px-5"
            }
          >
            User
          </Link>
        </li>
        <li>
          <Link
            href="/tasks"
            className={
              pathname === "/tasks" ? "bg-white py-4 px-5" : "py-4 px-5"
            }
          >
            Tasks
          </Link>
        </li>
      </ul>
    </div>
  );
}
