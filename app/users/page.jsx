"use client";
import Link from "next/link";
import fetchUsers from "@/utils/fetchData";
import fetchSingleUser from "@/utils/fetchSingleUser";
import { FaArrowCircleLeft } from "react-icons/fa";
import { useState, useEffect } from "react";
import Spinner from "@/components/Loading";
import { toast } from "react-toastify";
import Pagination from "@/components/Pagination";
import { useRouter } from "next/navigation";

const Users = () => {
  const router = useRouter();

  const [users, setUsers] = useState();
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchUsers(page, pageSize);
      setUsers(data.users);
      setTotalItems(data.total);
      setLoading(false);
    };
    fetchData();
  }, [users]);

  const handleDeleteUser = async (id) => {
    // console.log(id)
    const confirmed = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (!confirmed) return;

    try {
      // const res = await fetch(`api/users/${id}`, { method: "DELETE" });
      const res = await fetchSingleUser(id, "DELETE");
      if (res.status === 200) {
        const filteredUsers = users.filter((e) => e.id !== id);
        setUsers(filteredUsers);
        toast.success("Deleted Successfully");
        router.push("/users");
      } else {
        toast.error("Failed to delete user");
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete user");
    }
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return loading ? (
    <Spinner loading={loading} />
  ) : (
    <div className="w-2/6 m-auto mt-4 p-4 min-h-[420px] border-2 rounded bg-slate-50l flex flex-col">
      <div className="flex justify-between mb-4 items-center">
        <Link
          className="w-auto text-blue-500 mt-2 font-medium text-sm "
          href="/"
        >
          <FaArrowCircleLeft size="1.5em" />
        </Link>
        <h1 className="flex-1 mr-4 capitalize text-center text-2xl text-blue-500 font-semibold">
          all users
        </h1>
      </div>
      {users.map((user, index) => (
        <div
          key={user._id}
          className="w-full text-xl shadow tracking-wide font-medium bg-neutral-100 p-2 mb-2 flex justify-between items-center gap-3"
        >
          <Link className="w-auto flex-1" href={`/users/${user._id}`}>
            <div className="w-auto flex-1 capitalize">{user.name}</div>
          </Link>
          <Link
            href={`/users/${user._id}/edit`}
            className="bg-blue-500 text-white text-sm py-1 px-2 rounded"
          >
            Edit
          </Link>
          <button
            onClick={() => handleDeleteUser(user._id)}
            className="bg-red-500 text-white text-sm py-1 px-2 rounded"
          >
            Delete
          </button>
        </div>
      ))}
      <div className="mt-auto">
        <Pagination
          page={page}
          pageSize={pageSize}
          totalItems={totalItems}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Users;
