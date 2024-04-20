import React from "react";

const UserCard = ({ user }) => {
  return (
    <>
      <div className="w-full flex gap-2">
        <p className="w-24 text-right">Name:</p>
        <div className=" flex-1 capitalize">{user.name}</div>
      </div>
      <div className="w-full flex gap-2">
        <p className="w-24 text-right">Email:</p>
        <div className=" flex-1">{user.email}</div>
      </div>
      <div className="w-full flex gap-2">
        <p className="w-24 text-right">Mobile:</p>
        <div className=" flex-1 capitalize">{user.mobile}</div>
      </div>
    </>
  );
};

export default UserCard;
