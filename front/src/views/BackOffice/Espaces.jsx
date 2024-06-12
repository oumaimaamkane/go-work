import React, { useState, useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";
import { MdModeEdit } from "react-icons/md";
import { FiX } from "react-icons/fi";
import { BiCommentError } from "react-icons/bi";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { CgMoreO } from "react-icons/cg";
import Select from "react-select";
import axios from "axios";

export default function Espaces() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newEspace, setNewEspace] = useState({
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEspace((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setNewEspace((prev) => ({
      ...prev,
      images: e.target.files,
    }));
  };

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


  //select
  const Serviceoptions = services.map((service) => ({
    value: service.id,
    label: service.name,
  }));
  const Equipementoptions = equipements.map((equipement) => ({
    value: equipement.id,
    label: equipement.name,
  }));
  const handleChangeSelect = (selectedOptions) => {
    const selectedServiceIds = selectedOptions.map((option) => option.value);
    const selectedEquipementIds = selectedOptions.map((option) => option.value);
  };


  const [selectedCategory, setSelectedCategory] = useState(null);
  const handleChangeCategory = (selectedOption) => {
    setSelectedCategory(selectedOption);
  };


  const [selectedClientCategory, setSelectedClientCategory] = useState(null);
  const ClientCategoryOptions = [
    { value: 'freelancer', label: 'Freelancer' },
    { value: 'start-up', label: 'Start Up' },
    { value: 'entreprise', label: 'Entreprise' }
  ];
  const handleChangeClientCategory = (selectedOption) => {
    setSelectedClientCategory(selectedOption);
  };
  
  const [selectedStatus, setSelectedStatus] = useState(null);
  const StatusOptions = [
    { value: 'reserver', label: 'Reserver' },
    { value: 'valable', label: 'Valable' }
  ];
  const handleChangeStatus = (selectedOption) => {
    setSelectedStatus(selectedOption);
  };




  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-14 w-14 border-b-4 border-orange-500"></div>
      </div>
    );
  }

  // ADD ESPACES
  const handleAddEspace = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      Object.keys(newEspace).forEach((key) => {
        if (key === "images" && newEspace[key]) {
          for (let i = 0; i < newEspace[key].length; i++) {
            formData.append("images", newEspace[key][i]);
          }
        } else {
          formData.append(key, newEspace[key]);
        }
      });

      const response = await axios.post(
        "http://127.0.0.1:8000/api/espaces",
        formData,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setEspaces([...espaces, response.data]);
      setNewEspace({
        floor: "",
        description: "",
        status: "",
        price: "",
        capacity: "",
        client_categorie: "",
        category_id: "",
        service_id: [],
        equipement_id: [],
        images: null,
      });
      setIsAddModalOpen(false);
      setSuccess("Espace added successfully!");
      setTimeout(() => setSuccess(""), 2000);
    } catch (error) {
      setError("Failed to add Espace. Please try again.");
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
    <div className="p-6 min-h-screen dark:bg-neutral-800">
      <div className="flex justify-between items-center py-3 px-8 bg-white dark:bg-neutral-600 rounded-lg shadow-md mb-6">
        <span className="text-xl font-semibold text-gray-800 dark:text-white">
          List des Espaces
        </span>
        <button
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg shadow-md transition duration-300 font-medium"
          onClick={() => {
            setIsAddModalOpen(true);
            setNewEspace({
              floor: "",
              description: "",
              status: "",
              price: "",
              capacity: "",
              client_categorie: "",
              category_id: "",
              service_id: [],
              equipement_id: [],
              images: null,
            });
          }}
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

      <div className="bg-white dark:bg-neutral-700 rounded-lg p-6 shadow-lg">
        <table className="min-w-full bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 shadow-sm rounded-lg">
          <thead>
            <tr className="bg-gray-100 dark:bg-neutral-800">
              <th className="px-4 py-3 text-gray-800 dark:text-gray-100 font-semibold text-xs tracking-wide text-center">
                #
              </th>
              <th className="px-4 py-3 text-gray-800 dark:text-gray-100 font-semibold text-xs tracking-wide text-center">
                Image
              </th>
              <th className="px-4 py-3 text-gray-800 dark:text-gray-100 font-semibold text-xs tracking-wide text-left">
                Category
              </th>
              <th className="px-4 py-3 text-gray-800 dark:text-gray-100 font-semibold text-xs tracking-wide text-left">
                Capacity
              </th>
              <th className="px-4 py-3 text-gray-800 dark:text-gray-100 font-semibold text-xs tracking-wide text-left">
                Status
              </th>
              <th className="px-4 py-3 text-gray-800 dark:text-gray-100 font-semibold text-xs tracking-wide text-left">
                Price
              </th>
              <th className="px-4 py-3 text-gray-800 dark:text-gray-100 font-semibold text-xs tracking-wide text-center dark:border-neutral-700">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {espacesPerPage.map((espace, index) => (
              <tr
                key={espace.id}
                className="hover:bg-gray-50 border-t dark:hover:bg-neutral-700 transition-colors duration-200"
              >
                <td className="px-4 py-3 dark:border-neutral-700 dark:text-gray-300 text-center">
                  {index + 1}
                </td>
                <td className="px-4 py-3 dark:border-neutral-700 dark:text-gray-300 flex justify-center">
                  <img
                    className="h-10 w-10 rounded-full bg-gray-50"
                    src={espace.images}
                    alt={espace.name}
                  />
                </td>
                <td className="px-4 py-3 dark:border-neutral-700 dark:text-gray-300 text-left">
                  {espace.category.name}
                </td>
                <td className="px-4 py-3 dark:border-neutral-700 dark:text-gray-300 text-left">
                  {espace.capacity}
                  <span className="text-sm"> people</span>
                </td>
                <td className="px-4 py-3 dark:border-neutral-700 dark:text-gray-300 text-left">
                  {espace.status}
                </td>
                <td className="px-4 py-3 dark:border-neutral-700 dark:text-gray-300 text-left">
                  {espace.price}
                  <span className="text-sm"> MAD</span>
                </td>
                <td className="px-4 dark:border-neutral-700 flex justify-center gap-4">
                  <button
                    aria-label="Update"
                    className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-600 transition-colors rounded-full hover:bg-blue-50 dark:hover:bg-neutral-800"
                    onClick={() => setIsUpdateModalOpen(true)}
                  >
                    <MdModeEdit fontSize={18} />
                  </button>
                  <button
                    aria-label="Delete"
                    className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-600 transition-colors rounded-full hover:bg-red-50 dark:hover:bg-neutral-800"
                    onClick={() => {
                      setIsDeleteModalOpen(true);
                      setDeletingEspaceName(espace.name);
                      setDeletingEspaceId(espace.id);
                    }}
                  >
                    <AiFillDelete fontSize={19} />
                  </button>
                  <button
                    aria-label="Details"
                    className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-600 transition-colors rounded-full hover:bg-blue-50 dark:hover:bg-neutral-800"
                  >
                    <CgMoreO fontSize={18} />
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
            <h2 className="text-2xl font-semibold mb-6 dark:text-white" id="modal-headline">
              Add Espace
            </h2>
            <form onSubmit={handleAddEspace} className="mt-5">
              <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                
                {/* FLOOR */}
                <div className="sm:col-span-1">
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
                    value={newEspace.floor}
                    onChange={handleInputChange}
                    placeholder="Floor"
                    className="h-9 mt-1 block w-full rounded-sm border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 dark:bg-neutral-700 dark:border-neutral-600 dark:text-white sm:text-sm"
                    required
                  />
                </div>

                {/* PRICE */}
                <div className="sm:col-span-1">
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
                    value={newEspace.price}
                    onChange={handleInputChange}
                    min={0}
                    placeholder="Price"
                    step="0.01"
                    className="mt-1 h-9 block w-full rounded-sm border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 dark:bg-neutral-700 dark:border-neutral-600 dark:text-white sm:text-sm"
                    required
                  />
                </div>

                {/* CAPACITY */}
                <div className="sm:col-span-1">
                  <label
                    htmlFor="capacity"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Capacity
                  </label>
                  <input
                    type="number"
                    name="capacity"
                    placeholder="Capacity"
                    value={newEspace.capacity}
                    onChange={handleInputChange}
                    id="capacity"
                    min={1}
                    className="mt-1 h-9  block w-full rounded-sm border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 dark:bg-neutral-700 dark:border-neutral-600 dark:text-white sm:text-sm"
                    required
                  />
                </div>

                {/* STATUS */}
                <div className="sm:col-span-1">
                  <label
                    htmlFor="status"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Status
                  </label>
                  <Select
                    id="status"
                    name="status"
                    options={StatusOptions}
                    value={selectedStatus}
                    className="mt-1"
                    classNamePrefix="react-select"
                    onChange={handleChangeStatus}
                  />
                </div>

                {/* CLIENT CATEGORY */}
                <div className="sm:col-span-1">
                  <label
                    htmlFor="client_categorie"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Client Category
                  </label>
                  <Select
                    id="ClientCategory"
                    name="ClientCategory"
                    options={ClientCategoryOptions}
                    value={selectedClientCategory}
                    className="mt-1"
                    classNamePrefix="react-select"
                    onChange={handleChangeClientCategory}
                  />
                </div>

                {/* CATEGORY */}
                <div className="sm:col-span-1">
                  <label
                    htmlFor="category_id"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Category
                  </label>
                  <Select
                    id="category_id"
                    name="category_id"
                    options={categories.map((category) => ({
                      value: category.id,
                      label: category.name,
                    }))}
                    value={selectedCategory}
                    className="mt-1"
                    classNamePrefix="react-select"
                    onChange={handleChangeCategory}
                  />
                </div>

                {/* EQUIPEMENT */}
                <div className="sm:col-span-1">
                  <label
                    htmlFor="equipement_id"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Equipment
                  </label>
                  <Select
                    id="equipement_id"
                    name="equipement_id"
                    options={Equipementoptions}
                    isMulti
                    className="mt-1"
                    classNamePrefix="react-select"
                    onChange={handleChangeSelect}
                  />
                </div>

                {/* SERVICES */}
                <div className="sm:col-span-1">
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Services
                  </label>
                  <Select
                    id="service_id"
                    name="service_id"
                    options={Serviceoptions}
                    isMulti
                    className="mt-1"
                    classNamePrefix="react-select"
                    onChange={handleChangeSelect}
                  />
                </div>

                {/* DESCRIPTION */}
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
                    placeholder="Description"
                    value={newEspace.description}
                    onChange={handleInputChange}
                    rows={3}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 dark:bg-neutral-700 dark:border-neutral-600 dark:text-white sm:text-sm"
                    required
                  />
                </div>

                {/* PHOTO */}
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
                            multiple
                            onChange={handleFileChange}
                          />
                        </label>
                      </div>
                      <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-5 sm:mt-6 flex justify-end gap-4">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:col-start-1 sm:text-sm"
                  onClick={() => {
                    setIsAddModalOpen(false);
                    setError("");
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:col-start-2 sm:text-sm"
                  onClick={handleAddEspace}
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
