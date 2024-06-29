"use client";
import Image from "next/image";
import PostListView from "./components/postview/PostListView";
import Header from "./components/Header/Header";
import { useContext } from "react";
import { AuthContext } from "@/lib/AuthProvider/AuthProvider";
import Banner from "./components/Banner/Banner";
import TrendingTopic from "./components/TrendingTopic/TrendingTopic";
import NewsLetters from "./components/NewsLetters/NewsLetters";
import Footer from "./components/Footer/Footer";

export default function Home() {
  const { loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div class="min-h-screen flex justify-center items-center">
        <span class="loading loading-spinner text-success"></span>
      </div>
    );
  }

  return (
    <main className="">
      <div className="">
        <Header />
        <Banner/>
        <TrendingTopic/>
        <PostListView />
        <NewsLetters/>
        <Footer/>
      </div>
    </main>
  );
}
