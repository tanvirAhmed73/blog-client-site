import PostCardMake from "@/ui/PostCardMake/PostCardMake";
import getAllPost from "@/utlis/getAllPost";

const PostListView = async () => {
  try {
    const postdata = await getAllPost();

    if (!postdata || postdata.length === 0) {
      return (
        <div className="px-4 py-6">
          <h3>No posts available</h3>
        </div>
      );
    }

    return (
      <div className="px-4 py-6">
        <PostCardMake postdata={postdata} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching posts:", error);
    return (
      <div className="px-4 py-6">
        <h3>Failed to load posts</h3>
      </div>
    );
  }
};

export default PostListView;
