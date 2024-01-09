import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const AdminDetails = () => {
  const { id } = useParams();
  const [users, setUsers] = useState(null);
  const [contacts, setContacts] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await axios.get('https://dost-ke-dost-ka-project.onrender.com/user/getusers');
        const contactResponse = await axios.get('http://localhost:8080/contact/contact');

        setUsers(userResponse.data.data);
        setContacts(contactResponse.data.contacts);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="product-details bg-gray-200 pt-[15rem] flex flex-col w-full min-h-screen">
      <h1 className="text-2xl font-bold mb-4 w-full flex justify-center">Admin Dashboard</h1>
      {users && contacts ? (
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


<h1 className="text-2xl mt-10 font-bold mb-4 w-full flex justify-center">Contact Informations</h1>
      {users && contacts ? (
        <table className="min-w-full mt-10 divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Message
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {contacts.map((contact) => (
              <tr key={contact._id}>
                <td className="px-6 py-4 whitespace-nowrap">{contact.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{contact.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{contact.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading Contacts...</p>
      )}
    </div>
  );
};

export default AdminDetails;
