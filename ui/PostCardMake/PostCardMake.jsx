import Image from "next/image";
import Link from "next/link";
import man from "@/assets/trendingTopics/man.webp";

const PostCardMake = ({ postdata }) => {
  return (
    <div className="grid grid-cols-3 mx-auto gap-3 mt-5">
      {postdata?.map((post) => (
        <div
          key={post._id}
          className="card bg-base-100 border border-gray-200 shadow-md h-[500px] w-96 "
        >
          <figure>
            <Image
              src={post.image}
              alt="postImage"
              width={400}
              height={300}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl text-center">{post.title}</h2>
            <p
              className="line-clamp-3 text-center text-sm"
              dangerouslySetInnerHTML={{ __html: post.content }}
            ></p>

            <div className="flex items-center justify-center gap-2">
              <div className="flex gap-1">
                <Image
                  className="rounded-full"
                  src={man}
                  alt="authoLogo"
                  width={20}
                  height={20}
                />
                <p>Author: {post.author}</p>
              </div>
              <Link
                className="btn-style btn-style-color"
                href={`/postDetailsPage/${post._id}`}
              >
                <p>Details</p>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostCardMake;
