import React, { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { LuBadgeX } from "react-icons/lu";
import { LuBadgePlus } from "react-icons/lu";
import { FiX } from "react-icons/fi";
import { BiCommentError } from "react-icons/bi";
import axios from "axios";

export default function Users() {
  const [isBannModalOpen, setIsBannModalOpen] = useState(false);
  const [banningUserName, setBanningUserName] = useState("");
  const [banningUserId, setBanningUserId] = useState("");
  const [isUnBannModalOpen, setIsUnBannModalOpen] = useState(false);
  const [unBanningUserName, setUnBanningUserName] = useState("");
  const [unBanningUserId, setUnBanningUserId] = useState("");
  const [success, setSuccess] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState("unbanned");
  const itemsPerPage = 4;

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

  const filteredUsers = users.filter(
    (user) =>
      (activeTab === "unbanned" && !user.is_banned) ||
      (activeTab === "banned" && user.is_banned)
  );

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const usersToShow = filteredUsers.slice(startIndex, endIndex);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-14 w-14 border-b-4 border-orange-500"></div>
      </div>
    );
  }

  const handleBannUser = async () => {
    try {
      await axios.patch(`http://127.0.0.1:8000/api/users/${banningUserId}`, {
        is_banned: true,
      });
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === banningUserId ? { ...user, is_banned: true } : user
        )
      );
      setIsBannModalOpen(false);
      setSuccess("User banned successfully!");
      setTimeout(() => setSuccess(""), 2000);
    } catch (error) {
      setError("Failed to ban user. Please try again.");
    }
  };

  const handleUnBannUser = async () => {
    try {
      await axios.patch(`http://127.0.0.1:8000/api/users/${unBanningUserId}`, {
        is_banned: false,
      });
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === unBanningUserId ? { ...user, is_banned: false } : user
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

      <div className="bg-white dark:bg-neutral-700 px-6 py-2 rounded-lg shadow-lg">
        {/* Tabs */}
        <div className="flex justify-start mb-1">
          <button
            className={`px-6 py-2 rounded-tl-lg font-medium ${
              activeTab === "unbanned"
                ? "bg-gray-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            } transition duration-200`}
            onClick={() => setActiveTab("unbanned")}
            aria-selected={activeTab === "unbanned"}
          >
            Unbanned
          </button>
          <button
            className={`px-6 py-2 rounded-tr-lg font-medium ${
              activeTab === "banned"
                ? "bg-gray-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            } transition duration-200`}
            onClick={() => setActiveTab("banned")}
            aria-selected={activeTab === "banned"}
          >
            Banned
          </button>
        </div>

        <table className="table-auto w-full text-left border">
          <thead>
            <tr className="bg-gray-100 dark:bg-neutral-800">
              <th className="px-4 py-2 text-gray-800 dark:text-gray-100 font-semibold text-xs tracking-wide text-center">
                #
              </th>
              <th className="px-4 py-2 text-gray-800 dark:text-gray-100 font-semibold text-xs tracking-wide text-center">
                Image
              </th>
              <th className="px-4 py-2 text-gray-800 dark:text-gray-100 font-semibold text-xs tracking-wide text-left">
                Name
              </th>
              <th className="px-4 py-2 text-gray-800 dark:text-gray-100 font-semibold text-xs tracking-wide text-left">
                Email
              </th>
              <th className="px-4 py-2 text-gray-800 dark:text-gray-100 font-semibold text-xs tracking-wide text-left">
                Phone
              </th>
              <th className="px-4 py-2 text-gray-800 dark:text-gray-100 font-semibold text-xs tracking-wide text-center dark:border-neutral-700">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="dark:border-neutral-300">
            {usersToShow.map((user, index) => (
              <tr
                key={user.id}
                className="hover:bg-gray-50 border dark:hover:bg-neutral-600 transition duration-200"
              >
                <td className="px-4 py-2 dark:text-gray-300 text-center">
                  {startIndex + index + 1}
                </td>
                <td className="px-4 py-2 dark:text-gray-300 flex justify-center">
                  <img
                    className="h-10 w-10 flex-none rounded-full bg-gray-50"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </td>
                <td className="px-3 py-2 w-13 dark:text-gray-300">
                  {user.name}
                </td>
                <td className="px-3 py-2 dark:text-gray-300">{user.email}</td>
                <td className="px-3 py-2 dark:text-gray-300">{user.phone}</td>
                <td className="dark:text-gray-300 text-center">
                  {user.is_banned ? (
                    <button
                      aria-label="Unban"
                      className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-600"
                      onClick={() => {
                        setIsUnBannModalOpen(true);
                        setUnBanningUserName(user.name);
                        setUnBanningUserId(user.id);
                      }}
                    >
                      <LuBadgeX fontSize={25} />
                    </button>
                  ) : (
                    <button
                      aria-label="Ban"
                      className="text-green-500  hover:text-green-700 dark:text-green-400 dark:hover:text-green-600"
                      onClick={() => {
                        setIsBannModalOpen(true);
                        setBanningUserName(user.name);
                        setBanningUserId(user.id);
                      }}
                    >
                      <LuBadgePlus fontSize={25} />
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
            disabled={currentPage === 1}
            className={`flex items-center text-gray-600 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-400 cursor-pointer ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <ChevronLeftIcon className="h-5 w-5 mr-1" />
            Previous
          </button>
          <div className="text-gray-600 dark:text-gray-200">
            Page {currentPage} of{" "}
            {Math.ceil(filteredUsers.length / itemsPerPage)}
          </div>
          <button
            onClick={nextPage}
            disabled={endIndex >= filteredUsers.length}
            className={`flex items-center text-gray-600 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-400 cursor-pointer ${
              endIndex >= filteredUsers.length
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
          >
            Next
            <ChevronRightIcon className="h-5 w-5 ml-1" />
          </button>
        </div>
      </div>

      {/* Bann Modal */}
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
              <span className="text-red-500 font-bold">{banningUserName}</span>{" "}
              ?
            </h2>
            {error && (
              <div className="flex items-center gap-2 text-red-800 dark:text-red-500 px-1 rounded-lg text-sm">
                <BiCommentError /> {error}
              </div>
            )}
            <div className="flex justify-end">
              <button
                onClick={() => setIsBannModalOpen(false)}
                className="px-4 py-2 bg-gray-300 hover:bg-gray-400 dark:bg-neutral-600 dark:text-gray-300 rounded-md mr-2"
              >
                Cancel
              </button>
              <button
                onClick={handleBannUser}
                className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      {/* UnBann Modal */}
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
              <span className="text-green-500 font-bold">
                {unBanningUserName}
              </span>{" "}
              ?
            </h2>
            {error && (
              <div className="flex items-center gap-2 text-red-800 dark:text-red-500 px-1 rounded-lg text-sm">
                <BiCommentError /> {error}
              </div>
            )}
            <div className="flex justify-end">
              <button
                onClick={() => setIsUnBannModalOpen(false)}
                className="px-4 py-2 bg-gray-300 hover:bg-gray-400 dark:bg-neutral-600 dark:text-gray-300 rounded-md mr-2"
              >
                Cancel
              </button>
              <button
                onClick={handleUnBannUser}
                className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      {error && (
        <div className="fixed bottom-5 left-5 bg-red-100 dark:bg-red-200 text-red-800 dark:text-red-900 p-4 rounded-lg shadow-md flex items-center">
          <BiCommentError className="mr-2" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}
