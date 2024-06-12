import React, { useState, useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";
import { MdModeEdit } from "react-icons/md";
import { FiX } from "react-icons/fi";
import { BiCommentError } from "react-icons/bi";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import axios from "axios";

export default function Equipements() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newEquipementName, setNewEquipementName] = useState("");
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [UpdatingEquipementName, setUpdatingEquipementName] = useState("");
  const [UpdatingEquipementId, setUpdatingEquipementId] = useState("");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [DeletingEquipementName, setDeletingEquipementName] = useState("");
  const [DeletingEquipementId, setDeletingEquipementId] = useState("");
  const [success, setSuccess] = useState("");
  const [equipements, setEquipements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  //PAGINATION
  const items = 4;
  const [CurrentPage, setCurrentPage] = useState(1);
  const NbPage = Math.ceil(equipements.length / items);
  const StartIndex = (CurrentPage - 1) * items;
  const EndIndex = StartIndex + items;
  const EquipementsPerPage = equipements.slice(StartIndex, EndIndex);

  useEffect(() => {
    const fetchEquipements = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/equipements"
        );
        setEquipements(response.data);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch equipements from the server");
        setLoading(false);
      }
    };

    fetchEquipements();
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
  // ADD EQUIPEMENTS
  const handleAddEquipement = async () => {
    if (!newEquipementName) {
      setError("Equipement name is required");
      return;
    }

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/equipements",
        { name: newEquipementName }
      );
      setEquipements([...equipements, response.data]);
      setNewEquipementName("");
      setIsAddModalOpen(false);
      setSuccess("Equipement added successfully!");
      setTimeout(() => setSuccess(""), 2000);
    } catch (error) {
      setError("Failed to add equipement. Please try again.");
    }
  };

  //UPDATE EQUIPEMENTS
  const handleUpdateEquipement = async (equipementId, newName) => {
    try {
      await axios.put(`http://127.0.0.1:8000/api/equipements/${equipementId}`, {
        name: newName,
      });
      const updatedEquipements = equipements.map((equipement) => {
        if (equipement.id === equipementId) {
          return { ...equipement, name: newName };
        }
        return equipement;
      });
      setEquipements(updatedEquipements);
      setIsUpdateModalOpen(false);
      setSuccess("Equipement Updated successfully!");
      setTimeout(() => setSuccess(""), 2000);
    } catch (error) {
      setError("Failed to update equipement. Please try again.");
    }
  };
  //DELETE EQUIPEMENTS
  const handleDeleteEquipement = async (equipementId) => {
    try {
      await axios.delete(
        `http://127.0.0.1:8000/api/equipements/${equipementId}`
      );
      setEquipements(
        equipements.filter((equipement) => equipement.id !== equipementId)
      );
      setIsDeleteModalOpen(false);
      setSuccess("Equipement Deleted successfully!");
      setTimeout(() => setSuccess(""), 2000);
    } catch (error) {
      setError("Failed to delete equipement. Please try again.");
    }
  };

  return (
    <div className="p-6 min-h-screen dark:bg-neutral-800">
      <div className="flex justify-between items-center py-4 px-8 dark:bg-neutral-600 rounded-lg shadow-md mb-6">
        <span className="text-xl font-semibold text-gray-800 dark:text-white">
          List des Equipements
        </span>
        <button
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg shadow-md transition duration-300 font-medium"
          onClick={() => setIsAddModalOpen(true)}
        >
          Add Equipement
        </button>
      </div>
      {success && (
        <div className="bg-green-100 dark:bg-green-200 text-green-800 dark:text-green-900 p-4 rounded-lg shadow-md mb-4">
          {success}
        </div>
      )}

      <div className="bg-white dark:bg-neutral-700 p-6 rounded-lg shadow-lg">
      <table className="min-w-full bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 shadow-sm rounded-lg">
        <thead>
          <tr className="bg-gray-100 dark:bg-neutral-800">
            <th className="px-6 py-3 text-gray-800 dark:text-gray-100 font-semibold text-xs tracking-wide text-left">#</th>
            <th className="px-6 py-3 text-gray-800 dark:text-gray-100 font-semibold text-xs tracking-wide text-left">Name</th>
            <th className="px-6 py-3 text-gray-800 dark:text-gray-100 font-semibold text-xs tracking-wide text-center border-l dark:border-neutral-700">Action</th>
          </tr>
        </thead>
        <tbody>
          {EquipementsPerPage.map((equipement, index) => (
            <tr key={equipement.id} className="hover:bg-gray-50 border-t dark:hover:bg-neutral-700 transition-colors duration-200">
              <td className="px-6 py-3 dark:border-neutral-700 dark:text-gray-300">{index + 1}</td>
              <td className="px-6 py-3 dark:border-neutral-700 dark:text-gray-300">{equipement.name}</td>
              <td className="px-6 py-3 dark:border-neutral-700 flex justify-center items-center gap-3">
                <button
                  aria-label="Update"
                  className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-600 transition-colors p-1 rounded-full hover:bg-blue-50 dark:hover:bg-neutral-800"
                  onClick={() => {
                    setIsUpdateModalOpen(true);
                    setUpdatingEquipementName(equipement.name);
                    setUpdatingEquipementId(equipement.id);
                  }}
                >
                  <MdModeEdit fontSize={18} />
                </button>
                <button
                  aria-label="Delete"
                  className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-600 transition-colors p-1 rounded-full hover:bg-red-50 dark:hover:bg-neutral-800"
                  onClick={() => {
                    setIsDeleteModalOpen(true);
                    setDeletingEquipementName(equipement.name);
                    setDeletingEquipementId(equipement.id);
                  }}
                >
                  <AiFillDelete fontSize={18} />
                </button>
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
            disabled={EndIndex >= equipements.length}
            className={`flex items-center text-gray-600 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-400 cursor-pointer ${
              EndIndex >= equipements.length
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
          >
            Next
            <ChevronRightIcon className="h-5 w-5 ml-1" />
          </button>
        </div>
      </div>

      {isAddModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center transition-opacity duration-300">
          <div className="bg-white dark:bg-neutral-700 p-6 rounded-lg shadow-lg w-1/3 relative">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-400"
              onClick={() => {
                setIsAddModalOpen(false);
                setError("");
              }}
            >
              <FiX fontSize={24} />
            </button>
            <h2 className="text-2xl font-semibold mb-4 dark:text-white">
              Add Equipement
            </h2>
            <input
              type="text"
              value={newEquipementName}
              onChange={(e) => setNewEquipementName(e.target.value)}
              placeholder="Equipement Name"
              className="w-full px-4 py-2 mb-0.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 dark:bg-neutral-600 dark:border-neutral-500 dark:text-gray-200"
            />
            {error && (
              <div className="flex items-center gap-2 text-red-800 dark:text-red-500 px-1 rounded-lg text-sm">
                <BiCommentError /> {error}
              </div>
            )}
            <div className="flex justify-end mt-4">
              <button
                className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg mr-2"
                onClick={() => {
                  setIsAddModalOpen(false);
                  setError("");
                }}
              >
                Cancel
              </button>
              <button
                className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg"
                onClick={handleAddEquipement}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
      {isUpdateModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center transition-opacity duration-300">
          <div className="bg-white dark:bg-neutral-700 p-6 rounded-lg shadow-lg w-1/3 relative">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-400"
              onClick={() => {
                setIsUpdateModalOpen(false);
                setError("");
              }}
            >
              <FiX fontSize={24} />
            </button>
            <h2 className="text-2xl font-semibold mb-4 dark:text-white">
              Update Equipement
            </h2>
            <input
              type="text"
              value={UpdatingEquipementName}
              onChange={(e) => setUpdatingEquipementName(e.target.value)}
              className="w-full px-4 py-2 mb-0.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 dark:bg-neutral-600 dark:border-neutral-500 dark:text-gray-200"
            />
            {error && (
              <div className="flex items-center gap-2 text-red-800 dark:text-red-500 px-1 rounded-lg text-sm">
                <BiCommentError /> {error}
              </div>
            )}
            <div className="flex justify-end mt-4">
              <button
                className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg mr-2"
                onClick={() => {
                  setIsUpdateModalOpen(false);
                  setError("");
                }}
              >
                Cancel
              </button>
              <button
                className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg"
                onClick={() =>
                  handleUpdateEquipement(
                    UpdatingEquipementId,
                    UpdatingEquipementName
                  )
                }
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center transition-opacity duration-300">
          <div className="bg-white dark:bg-neutral-700 p-6 rounded-lg shadow-lg w-1/3 relative">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-400"
              onClick={() => {
                setIsDeleteModalOpen(false);
                setError("");
              }}
            >
              <FiX fontSize={24} />
            </button>
            <h2 className="text-2xl font-semibold mb-3 dark:text-white">
              Delete Equipement
            </h2>
            <h2 className="text-md mb-4 dark:text-white">
              Are you sure you want to delete{" "}
              <span className="text-red-500 font-bold">
                {DeletingEquipementName}
              </span>{" "}
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
                  setIsDeleteModalOpen(false);
                  setError("");
                }}
              >
                Cancel
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg"
                onClick={() =>
                  handleDeleteEquipement(
                    DeletingEquipementId,
                    DeletingEquipementName
                  )
                }
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
