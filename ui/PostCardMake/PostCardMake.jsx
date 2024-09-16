import man from "@/assets/trendingTopics/man.webp";
import Image from "next/image";
import Link from "next/link";

const PostCardMake = ({ postdata }) => {
  return (
    <div className="flex flex-col gap-6 md:flex-row justify-center px-4 py-6">
      {postdata.map((post) => (
        <div
          key={post._id}
          className="card w-full sm:w-80 md:w-96 bg-base-100 shadow-xl m-4"
        >
          <figure className="h-80 w-full overflow-hidden">
            <img
              src={post.image}
              alt="Post Image"
              className="object-cover h-full w-full"
              style={{ height: "350px", width: "384px" }}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-md font-bold mb-2">{post.title}</h2>
            {/* <p
              className="line-clamp-2 text-sm mb-4"
              dangerouslySetInnerHTML={{ __html: post.content }}
            ></p> */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Image
                  className="rounded-full"
                  src={man}
                  alt="authorLogo"
                  width={20}
                  height={20}
                />
                <p className="text-sm">Author: {post.author}</p>
              </div>
              <Link
                className="btn-style btn-style-color text-sm"
                href={`/postDetailsPage/${post._id}`}
              >
                Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostCardMake;
