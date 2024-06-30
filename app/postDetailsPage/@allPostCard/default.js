import PostCardMake from "@/ui/PostCardMake/PostCardMake";
import getAllPost from "@/utlis/getAllPost";


const defaultCardPage = async () => {
  const postdata = await getAllPost();

  return (
    <div className="flex justify-center">
        <PostCardMake postdata={postdata}/>
        
    </div>
  );
};

export default defaultCardPage;
