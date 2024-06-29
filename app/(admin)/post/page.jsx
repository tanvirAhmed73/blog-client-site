"use client";
import getAuthorsData from "@/utlis/getAuthorsData";
import getCategoriesData from "@/utlis/getCategoriesData";
import Image from "next/image";
import { useState, useEffect } from "react";
import { RTEField } from "./components/RTEField";
import Swal from "sweetalert2";

const Page = () => {
  const [image, setImage] = useState(null);
  const [data, setData] = useState([]);
  const [author, setAuthor] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getCategoriesData();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    const fetchAuthor = async () => {
      try {
        const result = await getAuthorsData();
        setAuthor(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAuthor();
  }, []);

  const handlePostSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const postSlug = form.postSlug.value;
    const category = form.category.value;
    const author = form.author.value;
    const postImage = form.postImage.files[0];
    // Handle form submission including content
    const post = {
      title,
      postSlug,
      postImage,
      content,
    };

    if (!postImage) {
      setError("Please upload a category image.");
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("image", postImage);

    fetch(
      "https://api.imgbb.com/1/upload?key=2b8186cf1104ff2ae3e1c6d5b9f4d087",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        const categoryData = {
          title,
          postSlug,
          content,
          category,
          author,
          image: data.data.url,
        };
        fetch("https://lynea-server.vercel.app/posts", {
          method: "POST",
          cache: "no-cache",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(categoryData),
        });
        setLoading(false);
        form.reset();
        if (data.success) {
          Swal.fire("Post Is Created!");
        }
      });
  };

  return (
    <section className="flex justify-between gap-5 btnColor rounded-xl p-7">
      <form onSubmit={handlePostSubmit} className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-500">
            Title <span className="text-red-600">*</span>
          </label>
          <input
            className="px-4 py-2 rounded-full border bg-gray-50"
            type="text"
            name="title"
            required
            placeholder="Enter title"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-500">
            Post slug <span className="text-red-600">*</span>
          </label>
          <input
            className="px-4 py-2 rounded-full border bg-gray-50"
            type="text"
            name="postSlug"
            required
            placeholder="Post slug"
          />
        </div>

        {image && (
          <div>
            <Image
              className="h-40"
              src={URL.createObjectURL(image)}
              alt="Selected"
              width={200}
              height={200}
            />
          </div>
        )}
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-500">
            Post Image <span className="text-red-600">*</span>
          </label>
          <input
            className="px-4 py-2 bg-gray-50"
            type="file"
            name="postImage"
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
            required
            placeholder="Post Image"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-500">
            Category <span className="text-red-600">*</span>
          </label>
          <select className="px-4 py-2 bg-gray-50" name="category">
            {loading ? (
              <option>Loading...</option>
            ) : (
              data.map((item) => (
                <option key={item._id} value={item.cateName}>
                  {item.cateName}
                </option>
              ))
            )}
          </select>
          {error && <p className="text-red-500 text-sm">{error.message}</p>}
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-500">
            Author <span className="text-red-600">*</span>
          </label>
          <select className="px-4 py-2 bg-gray-50" name="author">
            {loading ? (
              <option>Loading...</option>
            ) : (
              author.map((item) => (
                <option key={item._id} value={item.userName}>
                  {item.userName}
                </option>
              ))
            )}
          </select>
          {error && <p className="text-red-500 text-sm">{error.message}</p>}
        </div>

        <button
          type="submit"
          className={`bg-white rounded-full px-4 py-2 text-black ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          {loading ? "Loading..." : "Create"}
        </button>
      </form>

      <RTEField content={content} handleChange={setContent} />
    </section>
  );
};

export default Page;
