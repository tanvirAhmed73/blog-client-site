"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Calendar, Clock, Tag, User, Star, ArrowBigLeft } from "lucide-react";
import Link from "next/link";

const ArticleInfo = ({ postDetails }) => (
  <aside className="sticky top-0 self-start">
    <Link href={"/"}>
      <div className="flex text-pink-500">
        <ArrowBigLeft /> <span>Back To Home</span>
      </div>
    </Link>

    <h2 className="text-xl font-bold">Article Information</h2>
    <div className="p-4 border rounded-md shadow-md bg-white">
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
      const res = await fetch(`https://lynea-server.vercel.app/posts/${postId}`);
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();
      setPostDetails(data);
    };

    fetchPostDetails();
  }, [postId]);

  return (
    <>
      <main className="flex justify-center px-16 w-11/12  mx-auto py-10">
        <div className="flex gap-5 max-w-[1200px] w-full">
          <ArticleInfo postDetails={postDetails} />
          <section className="flex flex-col gap-5 text-center max-w-[800px] w-full">
            <h1 className="text-3xl font-bold">{postDetails?.title}</h1>
            <p className="text-gray-500">
              <span className="font-bold">Published</span>: Published: September
              26, 2019
            </p>
            <Image
              className="w-full object-cover"
              src={postDetails?.image}
              alt=""
              width={800}
              height={400}
            />
            <div className="flex justify-between items-center"></div>
            <div
              dangerouslySetInnerHTML={{ __html: postDetails?.content }}
            ></div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Page;
