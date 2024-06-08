import React, { useState, useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";
import { MdModeEdit } from "react-icons/md";
import { FiX } from "react-icons/fi";
import { BiCommentError } from "react-icons/bi";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { TERipple } from 'tw-elements-react';
import axios from "axios";

export default function Espaces() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newEspace, setNewEspace] = useState({
    name: "",
    floor: "",
    description: "",
    status: "",
    price: "",
    capacity: "",
    client_categorie: "",
    category_id: "",
    images: null,
  });
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [updatingEspace, setUpdatingEspace] = useState({
    id: "",
    name: "",
    floor: "",
    description: "",
    status: "",
    price: "",
    capacity: "",
    client_categorie: "",
    category_id: "",
    images: null,
  });
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deletingEspaceName, setDeletingEspaceName] = useState("");
  const [deletingEspaceId, setDeletingEspaceId] = useState("");
  const [success, setSuccess] = useState("");
  const [espaces, setEspaces] = useState([]);
  const [categories, setCategories] = useState([]);
  const [equipements, setEquipements] = useState([]);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Pagination
  const items = 4;
  const [CurrentPage, setCurrentPage] = useState(1);
  const NbPage = Math.ceil(espaces.length / items);
  const StartIndex = (CurrentPage - 1) * items;
  const EndIndex = StartIndex + items;
  const espacesPerPage = espaces.slice(StartIndex, EndIndex);
  useEffect(() => {
    const fetchEspaces = async () => {
      try {
        console.log("Fetching espaces from the server...");
        const response = await axios.get("http://127.0.0.1:8000/api/espaces");
        console.log("Espaces fetched successfully:", response.data);
        setEspaces(response.data);
      } catch (error) {
        console.error("Error fetching espaces:", error);
        setError("Failed to fetch espaces from the server");
      } finally {
        setLoading(false);
      }
    };

    fetchEspaces();

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

    const fetchServices = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/services");
        setServices(response.data);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch services from the server");
        setLoading(false);
      }
    };

    fetchServices();
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

  // ADD ESPACES
  const handleAddEspace = async () => {
    try {
      const formData = new FormData();
      Object.keys(newEspace).forEach((key) => {
        formData.append(key, newEspace[key]);
      });

      const response = await axios.post(
        "http://127.0.0.1:8000/api/espaces",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setEspaces([...espaces, response.data]);
      setNewEspace({
        name: "",
        floor: "",
        description: "",
        status: "",
        price: "",
        capacity: "",
        client_categorie: "",
        category_id: "",
        images: null,
      });
      setIsAddModalOpen(false);
      setSuccess("Espace added successfully!");
      setTimeout(() => setSuccess(""), 2000);
    } catch (error) {
      setError("Failed to add Espace. Please try again.");
    }
  };

  // UPDATE ESPACES
  const handleUpdateEspace = async () => {
    try {
      const formData = new FormData();
      Object.keys(updatingEspace).forEach((key) => {
        formData.append(key, updatingEspace[key]);
      });

      await axios.post(
        `http://127.0.0.1:8000/api/espaces/${updatingEspace.id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const updatedEspaces = espaces.map((espace) => {
        if (espace.id === updatingEspace.id) {
          return { ...espace, ...updatingEspace };
        }
        return espace;
      });

      setEspaces(updatedEspaces);
      setIsUpdateModalOpen(false);
      setSuccess("Espace updated successfully!");
      setTimeout(() => setSuccess(""), 2000);
    } catch (error) {
      setError("Failed to update Espace. Please try again.");
    }
  };

  // DELETE ESPACES
  const handleDeleteEspace = async (espaceId) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/espaces/${espaceId}`);
      setEspaces(espaces.filter((espace) => espace.id !== espaceId));
      setIsDeleteModalOpen(false);
      setSuccess("espace deleted successfully!");
      setTimeout(() => setSuccess(""), 2000);
    } catch (error) {
      setError("Failed to delete espace. Please try again.");
    }
  };

  return (
    <div className="p-4 min-h-screen dark:bg-neutral-800">
      <div className="flex justify-between items-center py-2 px-8 bg-white dark:bg-neutral-600 rounded-lg shadow-md mb-6">
        <span className="text-xl font-semibold text-gray-800 dark:text-white">
          List des Espaces
        </span>
        <button
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg shadow-md transition duration-300 font-medium"
          onClick={() => setIsAddModalOpen(true)}
        >
          Add Espace
        </button>
      </div>
      {success && (
        <div className="bg-green-100 dark:bg-green-200 text-green-800 dark:text-green-900 p-4 rounded-lg shadow-md mb-4">
          {success}
        </div>
      )}
      {error && (
        <div className="bg-red-100 dark:bg-red-200 text-red-800 dark:text-red-900 p-4 rounded-lg shadow-md mb-4">
          {error}
        </div>
      )}

      <div className="bg-white dark:bg-neutral-700 rounded-lg shadow-lg">
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
            {espacesPerPage.map((espace) => (
              <tr
                key={espace.id}
                className="hover:bg-gray-50 dark:hover:bg-neutral-600 transition duration-200"
              >
                <td className="border pl-7 py-2 w-4 dark:border-neutral-500 dark:text-gray-300">
                <img className="h-10 w-10 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                </td>
                <td className="border px-3 py-2 w-13 dark:border-neutral-500 dark:text-gray-300">
                  {espace.name}
                </td>
                <td className="border px-3 py-2 dark:border-neutral-500 dark:text-gray-300">
                  {espace.floor}
                </td>
                <td className="border px-3 py-2 dark:border-neutral-500 dark:text-gray-300">
                  {espace.price}
                </td>
                <td className="border dark:border-neutral-500 dark:text-gray-300 text-center">

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
            disabled={EndIndex >= espaces.length}
            className={`flex items-center text-gray-600 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-400 cursor-pointer ${
              EndIndex >= espaces.length ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Next
            <ChevronRightIcon className="h-5 w-5 ml-1" />
          </button>
        </div>
      </div>

      {/* Add Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen p-4 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              aria-hidden="true"
            ></div>
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div
              className="inline-block align-bottom bg-white dark:bg-neutral-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:align-middle sm:max-w-2xl sm:w-full sm:p-6"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="absolute top-0 right-0 pt-4 pr-4">
                <button
                  type="button"
                  className="text-gray-400 hover:text-gray-500 focus:outline-none"
                  onClick={() => setIsAddModalOpen(false)}
                >
                  <span className="sr-only">Close</span>
                  <FiX className="h-6 w-6" />
                </button>
              </div>
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                  <h2 className="text-2xl font-semibold mb-6 dark:text-white">
                    Add Espace
                  </h2>
                  <form onSubmit={handleAddEspace} className="mt-5">
                    <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="floor"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                          Floor
                        </label>
                        <input
                          type="number"
                          name="floor"
                          id="floor"
                          placeholder="floor"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 dark:bg-neutral-700 dark:border-neutral-600 dark:text-white sm:text-sm"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="price"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                          Price
                        </label>
                        <input
                          type="number"
                          name="price"
                          id="price"
                          min={0}
                          placeholder="price"
                          step="0.01"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 dark:bg-neutral-700 dark:border-neutral-600 dark:text-white sm:text-sm"
                          required
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="description"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                          Description
                        </label>
                        <textarea
                          id="description"
                          name="description"
                          placeholder="description"
                          rows={3}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 dark:bg-neutral-700 dark:border-neutral-600 dark:text-white sm:text-sm"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="status"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                          Status
                        </label>
                        <select
                          id="status"
                          name="status"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 dark:bg-neutral-700 dark:border-neutral-600 dark:text-white sm:text-sm"
                          required
                        >
                          <option value="valable">Valable</option>
                          <option value="reserver">Reserver</option>
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor="capacity"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                          Capacity
                        </label>
                        <input
                          type="number"
                          name="capacity"
                          placeholder="capacity"
                          id="capacity"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 dark:bg-neutral-700 dark:border-neutral-600 dark:text-white sm:text-sm"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="client_categorie"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                          Client Categorie
                        </label>
                        <select
                          id="client_categorie"
                          name="client_categorie"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 dark:bg-neutral-700 dark:border-neutral-600 dark:text-white sm:text-sm"
                          required
                        >
                          <option value="freelancer">Freelancer</option>
                          <option value="start-up">Start Up</option>
                          <option value="entreprise">Entreprise</option>
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor="service"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                          Services
                        </label>
                        <select
                          id="service_id"
                          name="service_id"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 dark:bg-neutral-700 dark:border-neutral-600 dark:text-white sm:text-sm"
                          required
                        >
                          {services.map((service) => (
                            <option key={service.id} value={service.id}>
                              {service.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="category_id"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                          Category
                        </label>
                        <select
                          id="category_id"
                          name="category_id"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 dark:bg-neutral-700 dark:border-neutral-600 dark:text-white sm:text-sm"
                          required
                        >
                          {categories.map((category) => (
                            <option key={category.id} value={category.id}>
                              {category.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="equipement_id"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                          Equipement
                        </label>
                        <select
                          id="equipement_id"
                          name="equipement_id"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 dark:bg-neutral-700 dark:border-neutral-600 dark:text-white sm:text-sm"
                          required
                        >
                          {equipements.map((equipement) => (
                            <option key={equipement.id} value={equipement.id}>
                              {equipement.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="images"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                          Cover Photo
                        </label>
                        <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                          <div className="space-y-1 text-center">
                            <PhotoIcon
                              className="mx-auto h-12 w-12 text-gray-400"
                              aria-hidden="true"
                            />
                            <div className="flex text-sm text-gray-600">
                              <label
                                htmlFor="images"
                                className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                              >
                                <span>Upload a file</span>
                                <input
                                  id="images"
                                  name="images"
                                  type="file"
                                  className="sr-only"
                                  accept="image/*"
                                />
                              </label>
                            </div>
                            {/* <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p> */}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-5 sm:mt-6 flex justify-end gap-4">
                      <button
                        type="button"
                        className="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:col-start-1 sm:text-sm"
                        onClick={() => setIsAddModalOpen(false)}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:col-start-2 sm:text-sm"
                      >
                        Add Espace
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Update Modal */}
      {isUpdateModalOpen && (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div
              className="inline-block align-bottom bg-white dark:bg-neutral-800 rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                <button
                  type="button"
                  className="bg-white dark:bg-neutral-800 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
                  onClick={() => setIsUpdateModalOpen(false)}
                >
                  <span className="sr-only">Close</span>
                  <FiX className="h-6 w-6" />
                </button>
              </div>
              <div>
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100">
                  <BiCommentError className="h-6 w-6 text-blue-600" />
                </div>
                <div className="mt-3 text-center sm:mt-5">
                  <h3
                    className="text-lg leading-6 font-medium text-gray-900 dark:text-white"
                    id="modal-headline"
                  >
                    Update Espace
                  </h3>
                  <div className="mt-2">
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full px-4 py-2 mt-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      value={selectedEspace.name}
                      onChange={(e) =>
                        setSelectedEspace({
                          ...selectedEspace,
                          name: e.target.value,
                        })
                      }
                    />
                    <input
                      type="text"
                      placeholder="Floor"
                      className="w-full px-4 py-2 mt-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      value={selectedEspace.floor}
                      onChange={(e) =>
                        setSelectedEspace({
                          ...selectedEspace,
                          floor: e.target.value,
                        })
                      }
                    />
                    <input
                      type="text"
                      placeholder="Description"
                      className="w-full px-4 py-2 mt-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      value={selectedEspace.description}
                      onChange={(e) =>
                        setSelectedEspace({
                          ...selectedEspace,
                          description: e.target.value,
                        })
                      }
                    />
                    <input
                      type="text"
                      placeholder="Status"
                      className="w-full px-4 py-2 mt-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      value={selectedEspace.status}
                      onChange={(e) =>
                        setSelectedEspace({
                          ...selectedEspace,
                          status: e.target.value,
                        })
                      }
                    />
                    <input
                      type="number"
                      placeholder="Price"
                      className="w-full px-4 py-2 mt-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      value={selectedEspace.price}
                      onChange={(e) =>
                        setSelectedEspace({
                          ...selectedEspace,
                          price: e.target.value,
                        })
                      }
                    />
                    <input
                      type="number"
                      placeholder="Capacity"
                      className="w-full px-4 py-2 mt-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      value={selectedEspace.capacity}
                      onChange={(e) =>
                        setSelectedEspace({
                          ...selectedEspace,
                          capacity: e.target.value,
                        })
                      }
                    />
                    <input
                      type="text"
                      placeholder="Client Categorie"
                      className="w-full px-4 py-2 mt-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      value={selectedEspace.client_categorie}
                      onChange={(e) =>
                        setSelectedEspace({
                          ...selectedEspace,
                          client_categorie: e.target.value,
                        })
                      }
                    />
                    <input
                      type="text"
                      placeholder="Category ID"
                      className="w-full px-4 py-2 mt-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      value={selectedEspace.category_id}
                      onChange={(e) =>
                        setSelectedEspace({
                          ...selectedEspace,
                          category_id: e.target.value,
                        })
                      }
                    />
                    <input
                      type="file"
                      placeholder="Images"
                      className="w-full px-4 py-2 mt-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      onChange={(e) =>
                        setSelectedEspace({
                          ...selectedEspace,
                          images: e.target.files[0],
                        })
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3">
                <button
                  type="button"
                  className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:col-start-2 sm:text-sm"
                  onClick={handleUpdateEspace}
                >
                  Update
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 sm:mt-0 sm:col-start-1 sm:text-sm"
                  onClick={() => setIsUpdateModalOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300">
          <div className="bg-white dark:bg-neutral-700 p-6 rounded-lg shadow-lg w-full max-w-md relative">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-400"
              onClick={() => {
                setIsDeleteModalOpen(false);
                setError("");
              }}
            >
              <FiX fontSize={24} />
            </button>
            <h2 className="text-2xl font-semibold mb-4 dark:text-white">
              Delete Espace
            </h2>
            <p className="text-md mb-4 dark:text-white">
              Are you sure you want to delete{" "}
              <span className="text-red-500 font-bold">
                {deletingEspaceName}
              </span>
              ?
            </p>
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
                onClick={() => handleDeleteEspace(deletingEspaceId)}
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
