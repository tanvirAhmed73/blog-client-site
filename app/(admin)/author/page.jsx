"use client";
import { useState, useEffect } from 'react';
import getAuthorsData from "@/utlis/getAuthorsData";
import Image from "next/image";
import Swal from "sweetalert2";

const Page = () => {
  const [authorData, setAuthorData] = useState([]);

  useEffect(() => {
    fetchAuthors();
  }, []);

  const fetchAuthors = async () => {
    try {
      const data = await getAuthorsData();
      setAuthorData(data);
    } catch (error) {
      console.error("Error fetching authors:", error);
    }
  };

  const handleDeleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://lynea-server.vercel.app/authors/${id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "The author has been removed.", "success");
              // Update author data after successful deletion
              fetchAuthors();
            }
          })
          .catch((error) => {
            console.error("Error deleting author:", error);
          });
      }
    });
  };

  return (
    <section className='w-full'>
      <h1 className="font-bold">Authors:</h1>
      <table className="w-full">
        <thead>
          <tr>
            <th className="border px-4 py-2 btnColor text-white">Sr.</th>
            <th className="border px-4 py-2 btnColor text-white">Image</th>
            <th className="border px-4 py-2 btnColor text-white">Name</th>
            <th className="border px-4 py-2 btnColor text-white">Email</th>
            <th className="border px-4 py-2 btnColor text-white">Delete User</th>
          </tr>
        </thead>
        <tbody>
          {authorData?.map((item, key) => (
            <tr key={key}>
              <td className="border px-4 py-2">{key + 1}</td>
              <td className="border px-4 py-2">
                <Image
                  className="h-10"
                  src={item?.photoUrl}
                  alt=""
                  width={100}
                  height={100}
                />
              </td>
              <td className="border px-4 py-2">{item?.userName}</td>
              <td className="border px-4 py-2">{item?.useremail}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => handleDeleteUser(item._id)}
                  className="bg-red-500 text-white rounded-full px-3 py-1 text-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Page;
