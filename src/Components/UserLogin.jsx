import React from "react";

export default function UserLogin({
  users,
  setUsers,
  userLoggedIn,
  setUserLoggedIn,
}) {
  return userLoggedIn ? (
    <div className="text-right">
      <span className="font-bold"> {userLoggedIn}</span>
      <span>
        <button
          onClick={() => setUserLoggedIn("")}
          className="text-black opacity-100 hover:opacity-75 bg-red-300 p-2 mx-2"
        >
          sign out
        </button>
      </span>
    </div>
  ) : (
    <div>
      <div className="">
        <label htmlFor="userselect" className="text-sm"></label>
        <select
          id="userselect"
          name="userselect"
          value={userLoggedIn}
          onChange={(e) => setUserLoggedIn(e.target.value)}
          className="border border-gray-400 p-2 text-m"
        >
          <option value="">choose username:</option>
          {users.map((user) => {
            return (
              <option key={user.username} value={user.username}>
                {user.username}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}
