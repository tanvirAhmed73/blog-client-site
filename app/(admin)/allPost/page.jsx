"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Swal from "sweetalert2";
import getAllPost from "@/utlis/getAllPost";

const Page = () => {
  const [postdata, setPostdata] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchPostsData();
  }, []);

  const fetchPostsData = async () => {
    try {
      const postdata = await getAllPost();
      setPostdata(postdata);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = (id) => {
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
        setLoading(true);
        fetch(`https://lynea-server.vercel.app/posts/${id}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => {
            setLoading(false);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your post has been removed.", "success");
              // Update postdata state after successful deletion
              fetchPostsData()
            }
          })
          .catch((error) => {
            setLoading(false);
            console.error("Error deleting post:", error);
          });
      }
    });
  };

  return (
    <div>
      <h1 className="font-bold">ALL POST:</h1>
      <table className="w-full">
        <thead>
          <tr>
            <th className="border px-4 py-2 btnColor text-white">Sr.</th>
            <th className="border px-4 py-2 btnColor text-white">Image</th>
            <th className="border px-4 py-2 btnColor text-white">Name</th>
            <th className="border px-4 py-2 btnColor text-white">Slug</th>
            <th className="border px-4 py-2 btnColor text-white">Action</th>
          </tr>
        </thead>
        <tbody>
          {postdata?.map((item, key) => (
            <tr key={key}>
              <td className="border px-4 py-2">{key + 1}</td>
              <td className="border px-4 py-2">
                <Image
                  className="h-10"
                  src={item?.image}
                  alt=""
                  width={100}
                  height={100}
                />
              </td>
              <td className="border px-4 py-2">{item?.title}</td>
              <td className="border px-4 py-2">{item?.postSlug}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => handleDelete(item._id)}
                  className={`bg-red-500 text-white rounded-full px-3 py-1 text-sm ${
                    loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={loading}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Page;
