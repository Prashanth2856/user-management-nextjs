"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import UserForm from "@/components/UserForm";
import postUser from "@/utils/postUser";

const initialFormData = {
  name: "",
  email: "",
  mobile: "",
};

const AddUser = () => {
  const [formData, setFormData] = useState(initialFormData);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await postUser("POST", formData);
      if (res.ok) {
        // const user = await res.json();
        toast.success("Added successfully");
        router.push(`/users`);
      } else {
        toast.error("Failed to Add");
      }
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="w-2/6 m-auto mt-4 p-4 pb-0 border-2 rounded bg-slate-50">
      <h1 className="capitalize tracking-wide text-center text-2xl mb-6 text-blue-500 font-semibold">
        Registration Form
      </h1>
      <UserForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formData={formData}
        buttonText="Add User"
      />
    </div>
  );
};

export default AddUser;
