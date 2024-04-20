"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [user, setUser] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(user);
    if (user !== "") {
      const query = `?name=${user}`;
      router.push(`/users/search-results${query}`);
    }
    setUser("");
  };

  return (
    <nav className={`${styles.container}`}>
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex justify-end gap-2 flex-1 text-right"
      >
        <input
          name="user"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          type="text"
          placeholder="search user..."
          className="w-5/12 px-4 py-1 rounded text-black"
        />
        <button className="bg-blue-500 text-white text-sm px-4 rounded w-24">
          Search
        </button>
      </form>
      <div className="flex w-4/12 justify-end gap-2">
        <Link className={styles.link} href="/">
          Home
        </Link>
        <Link className={styles.link} href="/users/add">
          Add User
        </Link>
        <Link className={styles.link} href="/users">
          Users
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
