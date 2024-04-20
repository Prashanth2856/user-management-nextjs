"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import fetchUsers from "@/utils/fetchData";
import Spinner from "@/components/Loading";

const HomeUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchAllUsers = async () => {
      const res = await fetchUsers();
      setTotal(res.total);
    };
    fetchAllUsers();
  }, []);

  useEffect(() => {
    const fetchUsersData = async () => {
      const res = await fetchUsers(1, total);
      setUsers(res.users);
      setLoading(false);
    };
    fetchUsersData();
  }, []);

  const homeUsers = users.sort(() => Math.random() - Math.random()).slice(0, 5);

  return loading || !users.length ? (
    <div>
      <Spinner loading={loading} />
    </div>
  ) : (
    <div className="w-2/6 m-auto mt-4 mb-2 p-4 border-2 rounded min-h-[420px] flex flex-col">
      <h1 className="capitalize tracking-wide text-center text-2xl mb-6 text-blue-500 font-semibold">
        Registered Users
      </h1>

      <div>
        {homeUsers.map((user, index) => (
          <div
            key={user._id}
            className="w-full text-xl shadow tracking-wide font-medium bg-neutral-100 p-2 mb-2 flex justify-between items-center gap-3"
          >
            <p className="capitalize">{index + 1}</p>
            <Link className="w-auto flex-1" href={`/users/${user._id}`}>
              <div className="w-auto flex-1 capitalize">{user.name}</div>
            </Link>
          </div>
        ))}
      </div>

      <div className="text-center mb-2 mt-4 flex justify-center">
        <Link
          className="mx-aut0 items-center mb-2 mt-4 border w-auto px-3 py-1 bg-blue-500 rounded text-white"
          href="/users"
        >
          View all
        </Link>
      </div>
    </div>
  );
};

export default HomeUsers;
