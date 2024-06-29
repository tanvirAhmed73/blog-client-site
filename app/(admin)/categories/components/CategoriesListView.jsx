"use client";
import getCategoriesData from "@/utlis/getCategoriesData";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";
import Swal from "sweetalert2";

const CategoriesListView = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCateData();
  }, []);

  const fetchCateData = async () => {
    const cateData = await getCategoriesData();
    setData(cateData);
  };

  const handleCateDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      showLoaderOnConfirm: true,
      allowOutsideClick: () => !Swal.isLoading()
    })
    .then((result) => {
        if (result.isConfirmed) {
          
            Swal.showLoading()
          
            fetch(`http://localhost:5000/categories/${id}`, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.deletedCount > 0) {
                  fetchCateData()
                  Swal.hideLoading()
                  Swal.fire(
                    "Deleted!",
                    "Your category has been removed.",
                    "success"
                  );
                }
              });
          
        }
      });



    
    // Swal.fire({
    //   title: "Are you sure?",
    //   text: "You won't be able to revert this!",
    //   icon: "warning",
    //   showCancelButton: true,
    //   confirmButtonColor: "#3085d6",
    //   cancelButtonColor: "#d33",
    //   confirmButtonText: "Yes, delete it!",
    // }).then((result) => {
    //   if (result.isConfirmed) {
        
    //       Swal.showLoading()
        
    //       fetch(`http://localhost:5000/categories/${id}`, {
    //         method: "DELETE",
    //       })
    //         .then((res) => res.json())
    //         .then((data) => {
    //           if (data.deletedCount > 0) {
    //             Swal.hideLoading()
    //             Swal.fire(
    //               "Deleted!",
    //               "Your category has been removed.",
    //               "success"
    //             );
    //           }
    //         });
        
    //   }
    // });
  };

  return (
    <section>
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
          {data?.map((item, key) => {
            return (
              <tr key={key}>
                <td className="border px-4 py-2">{key + 1}</td>
                <td className="border px-4 py-2">
                  {" "}
                  <Image
                    className="h-10"
                    src={item?.image}
                    alt=""
                    width={100}
                    height={100}
                  />{" "}
                </td>
                <td className="border px-4 py-2">{item?.cateName}</td>
                <td className="border px-4 py-2">{item?.slugName}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleCateDelete(item._id)}
                    className="bg-red-500 btn-style text-white rounded-full px-3 py-1 text-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        </div>
      ) : null} */}
    </section>
  );
};

export default CategoriesListView;
