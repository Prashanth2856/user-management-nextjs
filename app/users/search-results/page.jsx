"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import UserCard from "@/components/UserCard";
import Spinner from "@/components/Loading";
import { FaArrowCircleLeft } from "react-icons/fa";
import Link from "next/link";

const SearchResults = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const res = await fetch(
          `http://localhost:3000/api/users/search?name=${name}`
        );
        if (res.ok) {
          const data = await res.json();
          setUsers(data);
          // console.log(res);
          setLoading(false);
        }
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchSearchResults();
  }, [name]);

  return loading ? (
    <Spinner loading={loading} />
  ) : (
    <div className="w-2/6 m-auto mt-4 p-4 min-h-96 border-2 rounded bg-slate-50l flex flex-col">
      <div className="flex justify-between mb-4 items-center">
        <Link
          className="w-auto text-blue-500 mt-2 font-medium text-sm "
          href="/"
        >
          <FaArrowCircleLeft size="1.5em" />
        </Link>
        <h1 className="flex-1 mr-4 capitalize text-center text-2xl text-blue-500 font-semibold">
          Search Results
        </h1>
      </div>
      {users.length === 0 ? (
        <p>No users found</p>
      ) : (
        <div>
          {users?.map((user) => (
            <div
              key={user._id}
              className="w-full text-xl shadow tracking-wide font-medium bg-neutral-100 p-2 mb-4"
            >
              <UserCard user={user} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
