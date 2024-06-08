import React, { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { LuBadgeX } from "react-icons/lu";
import { LuBadgePlus } from "react-icons/lu";
import { FiX } from "react-icons/fi";
import { BiCommentError } from "react-icons/bi";
import axios from "axios";

export default function Users() {
  const [isBannModalOpen, setIsBannModalOpen] = useState(false);
  const [BanningUserName, setBanningUserName] = useState("");
  const [BanningUserId, setBanningUserId] = useState("");
  const [isUnBannModalOpen, setIsUnBannModalOpen] = useState(false);
  const [UnBanningUserName, setUnBanningUserName] = useState("");
  const [UnBanningUserId, setUnBanningUserId] = useState("");
  const [success, setSuccess] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  //PAGINATION
  const items = 4;
  const [CurrentPage, setCurrentPage] = useState(1);
  const NbPage = Math.ceil(users.length / items);
  const StartIndex = (CurrentPage - 1) * items;
  const EndIndex = StartIndex + items;
  const UsersPerPage = users.slice(StartIndex, EndIndex);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/users");
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch users from the server");
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Pagination functions
  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-14 w-14 border-b-4 border-orange-500"></div>
      </div>
    );
  }

  // BANN USER
  const handleBannUser = async () => {
    try {
      await axios.patch(`http://127.0.0.1:8000/api/users/${BanningUserId}`, {
        is_banned: true,
      });
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === BanningUserId ? { ...user, is_banned: true } : user
        )
      );
      setIsBannModalOpen(false);
      setSuccess("User banned successfully!");
      setTimeout(() => setSuccess(""), 2000);
    } catch (error) {
      setError("Failed to ban user. Please try again.");
    }
  };

// UNBANN USER
const handleUnBannUser = async () => {
  try {
    await axios.patch(`http://127.0.0.1:8000/api/users/${UnBanningUserId}`, {
      is_banned: false,
    });
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === UnBanningUserId ? { ...user, is_banned: false } : user
      )
    );
    setIsUnBannModalOpen(false);
    setSuccess("User unbanned successfully!");
    setTimeout(() => setSuccess(""), 2000);
  } catch (error) {
    setError("Failed to unban user. Please try again.");
  }
};

  return (
    <div className="p-6 min-h-screen dark:bg-neutral-800">
      <div className="flex justify-between items-center py-4 px-8 dark:bg-neutral-600 rounded-lg shadow-md mb-6">
        <span className="text-xl font-semibold text-gray-800 dark:text-white">
          List des Users
        </span>
      </div>
      {success && (
        <div className="bg-green-100 dark:bg-green-200 text-green-800 dark:text-green-900 p-4 rounded-lg shadow-md mb-4">
          {success}
        </div>
      )}

      <div className="bg-white dark:bg-neutral-700 p-6 rounded-lg shadow-lg">
        <table className="table-auto w-full text-left border">
          <thead>
            <tr className="bg-gray-100 dark:bg-neutral-600">
              <th className="px-6 py-3 text-gray-800 dark:text-gray-100 font-medium">
                Image
              </th>
              <th className="px-6 py-3 text-gray-800 dark:text-gray-100 font-medium">
                Name
              </th>
              <th className="px-6 py-3 text-gray-800 dark:text-gray-100 font-medium">
                Email
              </th>
              <th className="px-6 py-3 text-gray-800 dark:text-gray-100 font-medium">
                Phone
              </th>
              <th
                className="px-4 py-3 text-gray-800 dark:text-gray-100 font-medium text-center border-l-2 dark:border-neutral-300"
                style={{ width: "80px" }}
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody className="dark:border-neutral-300">
            {UsersPerPage.map((user) => (
              <tr
                key={user.id}
                className="hover:bg-gray-50 dark:hover:bg-neutral-600 transition duration-200"
              >
                <td className="border pl-7 py-2 w-4 dark:border-neutral-500 dark:text-gray-300">
                <img className="h-10 w-10 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                </td>
                <td className="border px-3 py-2 w-13 dark:border-neutral-500 dark:text-gray-300">
                  {user.name}
                </td>
                <td className="border px-3 py-2 dark:border-neutral-500 dark:text-gray-300">
                  {user.email}
                </td>
                <td className="border px-3 py-2 dark:border-neutral-500 dark:text-gray-300">
                  {user.phone}
                </td>
                <td className="border dark:border-neutral-500 dark:text-gray-300 text-center">
                  {user.is_banned ? (
                    <button
                      aria-label="Unban"
                      className="text-green-500  hover:text-green-700 dark:text-green-400 dark:hover:text-green-600"
                      onClick={() => {
                        setIsUnBannModalOpen(true);
                        setUnBanningUserName(user.name);
                        setUnBanningUserId(user.id);
                      }}
                    >
                    
                      <LuBadgePlus fontSize={25} />
                    </button>
                  ) : (
                    <button
                      aria-label="Ban"
                      className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-600"
                      onClick={() => {
                        setIsBannModalOpen(true);
                        setBanningUserName(user.name);
                        setBanningUserId(user.id);
                      }}
                    >
                       <LuBadgeX fontSize={25} /> 
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Pagination */}
        <div className="flex justify-end gap-8 items-center mt-4">
          <button
            onClick={prevPage}
            disabled={CurrentPage === 1}
            className={`flex items-center text-gray-600 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-400 cursor-pointer ${
              CurrentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <ChevronLeftIcon className="h-5 w-5 mr-1" />
            Previous
          </button>
          <div className="text-gray-600 dark:text-gray-200">
            Page {CurrentPage} of {NbPage}
          </div>
          <button
            onClick={nextPage}
            disabled={EndIndex >= users.length}
            className={`flex items-center text-gray-600 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-400 cursor-pointer ${
              EndIndex >= users.length ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Next
            <ChevronRightIcon className="h-5 w-5 ml-1" />
          </button>
        </div>
      </div>

      {isBannModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center transition-opacity duration-300">
          <div className="bg-white dark:bg-neutral-700 p-6 rounded-lg shadow-lg w-1/3 relative">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-400"
              onClick={() => {
                setIsBannModalOpen(false);
                setError("");
              }}
            >
              <FiX fontSize={24} />
            </button>
            <h2 className="text-2xl font-semibold mb-3 dark:text-white">
              Bann User
            </h2>
            <h2 className="text-md mb-4 dark:text-white">
              Are you sure you want to bann{" "}
              <span className="text-red-500 font-bold">{BanningUserName}</span>{" "}
              ?
            </h2>
            {error && (
              <div className="flex items-center gap-2 text-red-800 dark:text-red-500 px-1 rounded-lg text-sm">
                <BiCommentError /> {error}
              </div>
            )}
            <div className="flex justify-end mt-4">
              <button
                className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg mr-2"
                onClick={() => {
                  setIsBannModalOpen(false);
                  setError("");
                }}
              >
                Cancel
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg"
                onClick={() => handleBannUser(BanningUserId, BanningUserName)}
              >
                Bann
              </button>
            </div>
          </div>
        </div>
      )}
      {isUnBannModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center transition-opacity duration-300">
          <div className="bg-white dark:bg-neutral-700 p-6 rounded-lg shadow-lg w-1/3 relative">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-400"
              onClick={() => {
                setIsUnBannModalOpen(false);
                setError("");
              }}
            >
              <FiX fontSize={24} />
            </button>
            <h2 className="text-2xl font-semibold mb-3 dark:text-white">
              UnBann User
            </h2>
            <h2 className="text-md mb-4 dark:text-white">
              Are you sure you want to Unbann{" "}
              <span className="text-green-500 font-bold">{UnBanningUserName}</span>{" "}
              ?
            </h2>
            {error && (
              <div className="flex items-center gap-2 text-red-800 dark:text-red-500 px-1 rounded-lg text-sm">
                <BiCommentError /> {error}
              </div>
            )}
            <div className="flex justify-end mt-4">
              <button
                className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg mr-2"
                onClick={() => {
                  setIsUnBannModalOpen(false);
                  setError("");
                }}
              >
                Cancel
              </button>
              <button
                className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg"
                onClick={() => handleUnBannUser(UnBanningUserId, UnBanningUserName)}
              >
                UnBann
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
