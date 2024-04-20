import Link from "next/link";
import React from "react";

const UserForm = ({handleSubmit, formData, handleChange, buttonText}) => {

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="flex items-center">
            <label htmlFor="name" className="w-3/12 text-2xl p-2">
              Name:
            </label>
            <input
              className="w-9/12 h-12 text-lg p-2 border-2"
              type="text"
              placeholder="your name"
              id="name"
              value={formData.name}
              name="name"
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="flex items-center">
            <label htmlFor="email" className="w-3/12 text-2xl p-2">
              Email:
            </label>
            <input
              className=" w-9/12 h-12 text-lg p-2 border-2"
              type="text"
              placeholder="your email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="flex items-center">
            <label htmlFor="mobile" className="w-3/12 text-2xl p-2">
              Mobile:
            </label>
            <input
              className="w-9/12 h-12 text-lg p-2 border-2"
              type="text"
              placeholder="your mobile no."
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
            />
          </div>
          <div className="w-2/4 m-auto p-4 flex justify-center">
            <Link href={buttonText==="Add User" ? `/` : '/users'} className="m-auto text-md bg-red-500 text-white font-semibold py-1 px-2 rounded">
              Cancel
            </Link>
            <button className="m-auto text-md bg-green-500 text-white font-semibold py-1 px-2 rounded">
              {buttonText}
            </button>
          </div>
        </form>
    </div>
  );
};

export default UserForm;
