"use client";
import React, { useState, useEffect } from "react";
import fetchSingleUser from "@/utils/fetchSingleUser";
import { useParams } from "next/navigation";
import UserCard from "@/components/UserCard";
import Spinner from "@/components/Loading";
import Link from "next/link";
import { TfiArrowCircleLeft } from "react-icons/tfi";

const UserDetails = () => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const params = useParams();
  // console.log("Params", params)
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchSingleUser(params.id);
      setUser(data.data);
      setLoading(false);
    };

    fetchData();
  }, [user]);

  return user ? (
    <div className="w-2/6 m-auto mt-4 mb-2 p-4 border-2 rounded">
      <div className="flex justify-between mb-4 items-center">
        <Link
          className="w-auto text-red-500 mt-2 font-medium text-sm "
          href="/users"
        >
          <TfiArrowCircleLeft size='1.5em' />
        </Link>
        <h1 className="flex-1 mr-4 capitalize tracking-wide text-center text-2xl text-blue-500 font-semibold">
          User Details
        </h1>
      </div>
      <div className="w-full text-xl shadow tracking-wide font-medium bg-neutral-100 p-2 mb-2">
        <UserCard user={user} />
      </div>
    </div>
  ) : (
    <Spinner loading={loading} />
  );
};

export default UserDetails;
