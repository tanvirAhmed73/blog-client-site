"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";

const Page = () => {
  const [image, setImage] = useState(null)
  const searchParams = useSearchParams();
  const updateCategoryId = searchParams.get("id");


  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const cateName = form.catName.value;
    const slugName = form.slugName.value;
    const cateImage = form.cateImage.files[0];

    if (!cateImage) {
      setError("Please upload a category image.");
      setIsLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("image", cateImage);

    fetch(
      "https://api.imgbb.com/1/upload?key=2b8186cf1104ff2ae3e1c6d5b9f4d087",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        const categoryData = { cateName, slugName, image: data.data.url };
        fetch("http://localhost:5000/categories", {
          method: "POST",
          cache: "no-cache",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(categoryData),
        }).then(res => res.json())
        .then(data => {
          if(data.insertedId){
            Swal.fire("Category Created Successfully!");
          }
        })

      });
  };

  return (
    <div className="w-full p-6">
      <div className="flex gap-5 items-center">
        {updateCategoryId && (
          <div className="flex">
            <h3 className="text-white bg-orange-500 px-4 py-2 rounded-full text-xs font-bold">
              Update
            </h3>
          </div>
        )}
        {!updateCategoryId && (
          <div className="flex">
            <h3 className="text-white bg-green-500 px-4 py-2 rounded-full text-xs font-bold">
              Create
            </h3>
          </div>
        )}
        <h1 className="font-bold">Category | Form</h1>
      </div>
      <section className="bg-blue-50 rounded-xl p-7">
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-500">
              Category Name <span className="text-red-600">*</span>
            </label>
            <input
              className="px-4 py-2 rounded-full border bg-gray-50"
              type="text"
              name="catName"
              required
              placeholder="Enter Category Name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-500">
              Category slug <span className="text-red-600">*</span>
            </label>
            <input
              className="px-4 py-2 rounded-full border bg-gray-50"
              type="text"
              name="slugName"
              required
              placeholder="Category slug"
            />
          </div>

          {image && (
            <div>
              <Image
                className="h-40"
                src={URL.createObjectURL(image)}
                alt=""
                width={200}
                height={200}
              />
            </div>
          )}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-500">
              Category Image <span className="text-red-600">*</span>
            </label>
            <input
              className="px-4 py-2 bg-gray-50"
              type="file"
              name="cateImage"
              onChange={(e) => {
                e.preventDefault();
                setImage(e.target.files[0]);
              }}
              required
              placeholder="Category Image"
            />
          </div>
          {/* {error && <p className="text-red-500 text-sm">{error}</p>} */}
          <button
            type="submit"
            // disabled={isLoading || isDone}
            className="bg-blue-500 rounded-full px-4 py-2 text-white"
          >
            {/* {isLoading ? "LOading" : "Create"} */}
            Create
          </button>
        </form>
      </section>
    </div>
  );
};

export default Page;
