"use client";
import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import fetchSingleUser from "@/utils/fetchSingleUser";
import { toast } from "react-toastify";
import UserForm from "@/components/UserForm";
import postUser from "@/utils/postUser";

const EditUser = () => {
  const [formData, setFormData] = useState();
  const { id } = useParams();
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    const fetchUserData = async () => {
      const userData = await fetchSingleUser(id);
      setFormData(userData.data);
    };
    fetchUserData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await postUser("PUT", formData, id)
      if (res.ok) {
        // const updatedUser = await res.json();
        toast.success("Updated successfully");
        router.push(`/users/${id}`);
      } else {
        toast.error("Failed to update");
      }
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    formData && (
      <div className="w-2/6 m-auto mt-4 p-4 pb-0 border-2 rounded bg-slate-50">
        <h1 className="capitalize tracking-wide text-center text-2xl mb-6 text-blue-500 font-semibold">
          Edit User Details
        </h1>
        <UserForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          formData={formData}
          buttonText="Update"
        />
      </div>
    )
  );
};

export default EditUser;
