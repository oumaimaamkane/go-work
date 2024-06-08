import React, { useState, useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";
import { MdModeEdit } from "react-icons/md";
import { FiX } from "react-icons/fi";
import { BiCommentError } from "react-icons/bi";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import axios from "axios";

export default function Categories() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [UpdatingCategoryName, setUpdatingCategoryName] = useState("");
  const [UpdatingCategoryId, setUpdatingCategoryId] = useState("");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [DeletingCategoryName, setDeletingCategoryName] = useState("");
  const [DeletingCategoryId, setDeletingCategoryId] = useState("");
  const [success, setSuccess] = useState("");
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  //PAGINATION
  const items = 4;
  const [CurrentPage, setCurrentPage] = useState(1);
  const NbPage = Math.ceil(categories.length / items);
  const StartIndex = (CurrentPage - 1) * items;
  const EndIndex = StartIndex + items;
  const CategoriesPerPage = categories.slice(StartIndex, EndIndex);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/categories"
        );
        setCategories(response.data);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch categories from the server");
        setLoading(false);
      }
    };

    fetchCategories();
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
  // ADD CATEGORIES
  const handleAddCategory = async () => {
    if (!newCategoryName) {
      setError("Category name is required");
      return;
    }

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/categories",
        { name: newCategoryName }
      );
      setCategories([...categories, response.data]);
      setNewCategoryName("");
      setIsAddModalOpen(false);
      setSuccess("Category added successfully!");
      setTimeout(() => setSuccess(""), 2000);
    } catch (error) {
      setError("Failed to add category. Please try again.");
    }
  };

  //UPDATE CATEGORIES
  const handleUpdateCategory = async (categoryId, newName) => {
    try {
      await axios.put(`http://127.0.0.1:8000/api/categories/${categoryId}`, {
        name: newName,
      });
      const updatedCategories = categories.map((category) => {
        if (category.id === categoryId) {
          return { ...category, name: newName };
        }
        return category;
      });
      setCategories(updatedCategories);
      setIsUpdateModalOpen(false);
      setSuccess("Category Updated successfully!");
      setTimeout(() => setSuccess(""), 2000);
    } catch (error) {
      setError("Failed to update category. Please try again.");
    }
  };
  //DELETE CATEGORIES
  const handleDeleteCategory = async (categoryId) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/categories/${categoryId}`);
      setCategories(
        categories.filter((category) => category.id !== categoryId)
      );
      setIsDeleteModalOpen(false);
      setSuccess("Category Deleted successfully!");
      setTimeout(() => setSuccess(""), 2000);
    } catch (error) {
      setError("Failed to delete category. Please try again.");
    }
  };

  return (
    <div className="p-6 min-h-screen dark:bg-neutral-800">
      <div className="flex justify-between items-center py-4 px-8 dark:bg-neutral-600 rounded-lg shadow-md mb-6">
        <span className="text-xl font-semibold text-gray-800 dark:text-white">
          List des Categories
        </span>
        <button
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg shadow-md transition duration-300 font-medium"
          onClick={() => setIsAddModalOpen(true)}
        >
          Add Category
        </button>
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
                Name
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
            {CategoriesPerPage.map((category) => (
              <tr
                key={category.id}
                className="hover:bg-gray-50 dark:hover:bg-neutral-600 transition duration-200"
              >
                <td className="border px-6 py-4 dark:border-neutral-500 dark:text-gray-300">
                  {category.name}
                </td>
                <td
                  className="py-5 px-8 border flex justify-center items-center gap-6 dark:border-neutral-500"
                  style={{ width: "85px" }}
                >
                  <button
                    aria-label="Update"
                    className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-600"
                    onClick={() => {
                      setIsUpdateModalOpen(true);
                      setUpdatingCategoryName(category.name);
                      setUpdatingCategoryId(category.id);
                    }}
                  >
                    <MdModeEdit fontSize={20} />
                  </button>
                  <button
                    aria-label="Delete"
                    className="text-red-500 hover:text-red-700 ml-2 dark:text-red-400 dark:hover:text-red-600"
                    onClick={() => {
                      setIsDeleteModalOpen(true);
                      setDeletingCategoryName(category.name);
                      setDeletingCategoryId(category.id);
                    }}
                  >
                    <AiFillDelete fontSize={20} />
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
            className={`flex items-center text-gray-600 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-400 cursor-pointer ${CurrentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <ChevronLeftIcon className="h-5 w-5 mr-1" />
            Previous
          </button>
          <div className="text-gray-600 dark:text-gray-200">
            Page {CurrentPage} of {NbPage}
          </div>
          <button
            onClick={nextPage}
            disabled={EndIndex >= categories.length}
            className={`flex items-center text-gray-600 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-400 cursor-pointer ${EndIndex >= categories.length ? 'opacity-50 cursor-not-allowed' : ''}`}
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
              Add Category
            </h2>
            <input
              type="text"
              value={newCategoryName}
              onChange={(e) => setNewCategoryName(e.target.value)}
              placeholder="Category Name"
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
                onClick={handleAddCategory}
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
              Update Category
            </h2>
            <input
              type="text"
              value={UpdatingCategoryName}
              onChange={(e) => setUpdatingCategoryName(e.target.value)}
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
                  handleUpdateCategory(UpdatingCategoryId, UpdatingCategoryName)
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
              Delete Category
            </h2>
            <h2 className="text-md mb-4 dark:text-white">
              Are you sure you want to delete{" "}
              <span className="text-red-500 font-bold">
                {DeletingCategoryName}
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
                  handleDeleteCategory(DeletingCategoryId, DeletingCategoryName)
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
