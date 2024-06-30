import getAllPost from "@/utlis/getAllPost";

import PostCardMake from "@/ui/PostCardMake/PostCardMake";

const PostListView = async () => {
  const postdata = await getAllPost();

  if (!postdata || postdata.length === 0) {
    return (
      <div>
        <h3>Post Not Available</h3>
      </div>
    );
  }

  return (
    <div className="flex justify-center ">
      <div>
        <PostCardMake postdata={postdata}/>
      </div>
    </div>
  );
};

export default PostListView;
