// utils/getAllPost.js
const getAllPost = async () => {
  const res = await fetch("https://lynea-server.vercel.app/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed To Fetch Post Data");
  }
  const postdata = await res.json();
  return postdata;
};

export default getAllPost;
