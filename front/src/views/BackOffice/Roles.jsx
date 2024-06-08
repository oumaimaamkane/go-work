import React, { useState, useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";
import { MdModeEdit } from "react-icons/md";
import axios from "axios";

export default function Roles() {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/roles")
      .then(response => {
        setRoles(response.data);
      })
      .catch(error => {
        console.error('Error fetching roles:', error);
      });
  }, []);

  return (
    <div className="p-6 min-h-screen">
      <div className="flex justify-between items-center py-4 px-8 bg-white rounded-lg shadow-md mb-6">
        <span className="text-xl font-semibold text-gray-800">
          List des Roles :
        </span>
        <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg shadow-md transition duration-300 font-medium">
          Add role
        </button>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <table className="table-auto w-full text-left border">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-3 text-gray-800 font-medium">Name</th>
              <th
                className="px-4 py-3 text-gray-800 font-medium text-center border-l-2"
                style={{ width: "80px" }}
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {roles.map(role => (
              <tr key={role.id} className="hover:bg-gray-50 transition duration-200">
                <td className="border px-6 py-4">{role.name}</td>
                <td
                  className="border px-2 py-4 flex justify-center items-center gap-6"
                  style={{ width: "80px" }}
                >
                  <button
                    aria-label="Edit"
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <MdModeEdit fontSize={20} />
                  </button>
                  <button
                    aria-label="Delete"
                    className="text-red-500 hover:text-red-700 ml-2"
                  >
                    <AiFillDelete fontSize={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
