import React, { useState, useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";
import { MdModeEdit } from "react-icons/md";
import { FiX } from "react-icons/fi";
import { BiCommentError } from "react-icons/bi";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import axios from "axios";

export default function Services() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newServiceName, setNewServiceName] = useState("");
  const [newServiceImage, setNewServiceImage] = useState(null);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [updatingServiceName, setUpdatingServiceName] = useState("");
  const [updatingServiceImage, setUpdatingServiceImage] = useState("");
  const [updatingServiceId, setUpdatingServiceId] = useState("");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deletingServiceName, setDeletingServiceName] = useState("");
  const [deletingServiceId, setDeletingServiceId] = useState("");
  const [success, setSuccess] = useState("");
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState("");
  // Pagination
  const items = 4;
  const [CurrentPage, setCurrentPage] = useState(1);
  const NbPage = Math.ceil(services.length / items);
  const StartIndex = (CurrentPage - 1) * items;
  const EndIndex = StartIndex + items;
  const servicesPerPage = services.slice(StartIndex, EndIndex);

  useEffect(() => {
    const fetchServices = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/services');
            setServices(response.data);
            setLoading(false);
        } catch (error) {
            setError('Failed to fetch services from the server');
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

  // ADD SERVICES
  const handleAddService = async () => {
    if (!newServiceName || !newServiceImage) {
        setError('Service name and image are required');
        return;
    }

    try {
        const formData = new FormData();
        formData.append('name', newServiceName);
        formData.append('image', newServiceImage);

        const response = await axios.post('http://127.0.0.1:8000/api/services', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        const newService = response.data.service;
        newService.image = response.data.image; // Ensure image URL is set
        setServices([...services, newService]);
        setNewServiceName('');
        setNewServiceImage(null);
        setIsAddModalOpen(false);
        setSuccess('Service added successfully!');
        setTimeout(() => setSuccess(''), 2000);
    } catch (error) {
        setError('Failed to add service. Please try again.');
    }
};

  

  // UPDATE SERVICES
  const handleUpdateService = async (serviceId, newName, newImage) => {
    try {
      await axios.put(`http://127.0.0.1:8000/api/services/${serviceId}`, {
        name: newName,
        image: newImage,
      });
      const updatedServices = services.map((service) => {
        if (service.id === serviceId) {
          return { ...service, name: newName, image: newImage };
        }
        return service;
      });
      setServices(updatedServices);
      setIsUpdateModalOpen(false);
      setSuccess("Service updated successfully!");
      setTimeout(() => setSuccess(""), 2000);
    } catch (error) {
      setError("Failed to update service. Please try again.");
    }
  };

  // DELETE SERVICES
  const handleDeleteService = async (serviceId) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/services/${serviceId}`);
      setServices(services.filter((service) => service.id !== serviceId));
      setIsDeleteModalOpen(false);
      setSuccess("Service deleted successfully!");
      setTimeout(() => setSuccess(""), 2000);
    } catch (error) {
      setError("Failed to delete service. Please try again.");
    }
  };

  return (
    <div className="p-6 min-h-screen dark:bg-neutral-800">
      <div className="flex justify-between items-center py-4 px-8 bg-white dark:bg-neutral-600 rounded-lg shadow-md mb-6">
        <span className="text-xl font-semibold text-gray-800 dark:text-white">
          List of Services
        </span>
        <button
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg shadow-md transition duration-300 font-medium"
          onClick={() => setIsAddModalOpen(true)}
        >
          Add Service
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

      <div className="bg-white dark:bg-neutral-700 p-6 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-8">
          {servicesPerPage.map((service) => (
            <div
              key={service.id}
              className="group relative bg-gray-50 dark:bg-neutral-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="overflow-hidden rounded-xl bg-gray-200 group-hover:opacity-75 lg:h-40 flex items-center justify-center">
                <img
                  src={service.image}

                  alt={service.name}  
                  className="h-20 w-20 object-cover"
                />
              </div>
              <h3 className="text-sm pl-2 text-gray-700 dark:text-gray-200">
                {service.name}
              </h3>
              <div className="flex justify-end gap-3 space-x-2 mt-3">
                <MdModeEdit
                  className="text-white dark:text-neutral-200 p-0.5 hover:bg-blue-700 cursor-pointer bg-blue-500 rounded-full"
                  onClick={() => {
                    setIsUpdateModalOpen(true);
                    setUpdatingServiceName(service.name);
                    setUpdatingServiceId(service.id);
                  }}
                  fontSize={22}
                />
                <AiFillDelete
                  className="text-white dark:text-neutral-200 p-0.5 hover:bg-red-700 cursor-pointer bg-red-500 rounded-full"
                  onClick={() => {
                    setIsDeleteModalOpen(true);
                    setDeletingServiceName(service.name);
                    setDeletingServiceId(service.id);
                  }}
                  fontSize={22}
                />
              </div>
            </div>
          ))}
        </div>

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
            disabled={EndIndex >= services.length}
            className={`flex items-center text-gray-600 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-400 cursor-pointer ${EndIndex >= services.length ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Next
            <ChevronRightIcon className="h-5 w-5 ml-1" />
          </button>
        </div>
      </div>

      {/* Add Service Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300">
          <div className="bg-white dark:bg-neutral-700 p-6 rounded-lg shadow-lg w-full max-w-md relative">
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
              Add Service
            </h2>
            <input
              type="text"
              value={newServiceName}
              onChange={(e) => setNewServiceName(e.target.value)}
              placeholder="Service Name"
              className="w-full px-4 py-2 mb-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 dark:bg-neutral-600 dark:border-neutral-500 dark:text-gray-200"
            />
            <label className="m-2 dark:text-white">Image :</label>
            <input
              type="file"
              onChange={(e) => setNewServiceImage(e.target.files[0])}
              className="w-full px-4 py-2 mb-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 dark:bg-neutral-600 dark:border-neutral-500 dark:text-gray-200"
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
                onClick={handleAddService}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
      {isUpdateModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300">
          <div className="bg-white dark:bg-neutral-700 p-6 rounded-lg shadow-lg w-full max-w-md relative">
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
              Update Service
            </h2>
            <input
              type="text"
              value={updatingServiceName}
              onChange={(e) => setUpdatingServiceName(e.target.value)}
              placeholder="Service Name"
              className="w-full px-4 py-2 mb-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 dark:bg-neutral-600 dark:border-neutral-500 dark:text-gray-200"
            />
            <label className="m-2 dark:text-white">Image :</label>
            <input
              type="file"
              value={updatingServiceImage}
              onChange={(e) => setUpdatingServiceImage(e.target.value)}
              placeholder="Image URL"
              className="w-full px-4 py-2 mb-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 dark:bg-neutral-600 dark:border-neutral-500 dark:text-gray-200"
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
                  handleUpdateService(
                    updatingServiceId,
                    updatingServiceName,
                    updatingServiceImage
                  )
                }
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Service Modal */}
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
              Delete Service
            </h2>
            <p className="text-md mb-4 dark:text-white">
              Are you sure you want to delete{" "}
              <span className="text-red-500 font-bold">
                {deletingServiceName}
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
                onClick={() => handleDeleteService(deletingServiceId)}
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
