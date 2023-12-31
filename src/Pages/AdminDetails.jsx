import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const AdminDetails = () => {
  const { id } = useParams();
  const [users, setUsers] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`https://dost-ke-dost-ka-project.onrender.com/user/getusers`);
        setUsers(response.data.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchUsers();
  }, [id]);

  return (
    <div className="product-details bg-gray-200 pt-[15rem] flex flex-col w-full min-h-screen">
      <h1 className="text-2xl font-bold mb-4 w-full flex justify-center">Admin Dashboard</h1>
      {users ? (
        <table className="min-w-full mt-10 divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Username
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user._id}>
                <td className="px-6 py-4 whitespace-nowrap">{user.username}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading users...</p>
      )}
    </div>
  );
};

export default AdminDetails;
