"use client";
import { ArrowBigLeft, Calendar, Clock, Star, Tag, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const ArticleInfo = ({ postDetails }) => (
  <aside className="sticky top-0 self-start w-full max-w-xs md:max-w-md lg:max-w-sm">
    <Link href={"/"}>
      <div className="flex text-pink-500 items-center space-x-2">
        <ArrowBigLeft /> <span>Back To Home</span>
      </div>
    </Link>

    <h2 className="text-xl font-bold mt-4">Article Information</h2>
    <div className="p-4 border rounded-md shadow-md bg-white mt-4">
      <ul className="mt-2 space-y-1">
        <li className="flex items-center">
          <Tag className="w-5 h-5 mr-2 text-pink-500" />
          Category: {postDetails?.category}
        </li>
        <li className="flex items-center">
          <Clock className="w-5 h-5 mr-2 text-pink-500" />
          Updated: September 26, 2019
        </li>
        <li className="flex items-center">
          <User className="w-5 h-5 mr-2 text-pink-500" />
          Author: {postDetails?.author}
        </li>
        <li className="flex items-center">
          <Calendar className="w-5 h-5 mr-2 text-pink-500" />
          Reading time: 1 Min
        </li>
        <li className="flex items-center">
          <Star className="w-5 h-5 mr-2 text-pink-500" />
          Rating: {postDetails?.rating} ⭐
        </li>
      </ul>
    </div>
  </aside>
);

const Page = ({ params }) => {
  const { postId } = params;
  const [postDetails, setPostDetails] = useState({});

  useEffect(() => {
    const fetchPostDetails = async () => {
      const res = await fetch(
        `https://lynea-server.vercel.app/posts/${postId}`
      );
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();
      setPostDetails(data);
    };

    fetchPostDetails();
  }, [postId]);

  return (
    <main className="flex flex-col lg:flex-row justify-center px-4 sm:px-6 lg:px-16 w-full max-w-screen-lg mx-auto py-10">
      <ArticleInfo postDetails={postDetails} />
      <section className="flex flex-col gap-5 text-center w-full lg:ml-5">
        <h1 className="text-2xl md:text-3xl font-bold">{postDetails?.title}</h1>
        <p className="text-gray-500">
          <span className="font-bold">Published</span>: September 26, 2019
        </p>
        <Image
          className="w-full object-cover"
          src={postDetails?.image}
          alt=""
          width={800}
          height={400}
        />
        <div
          className="prose prose-sm sm:prose-base lg:prose-lg mx-auto"
          dangerouslySetInnerHTML={{ __html: postDetails?.content }}
        ></div>
      </section>
    </main>
  );
};

export default Page;
