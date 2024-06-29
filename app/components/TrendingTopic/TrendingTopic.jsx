import Image from "next/image";
import candle from "@/assets/trendingTopics/candle.webp";
import bird from "@/assets/trendingTopics/bird.webp";
import boat from "@/assets/trendingTopics/boat.webp";
import gitterman from "@/assets/trendingTopics/gitterman.webp";
import man from "@/assets/trendingTopics/man.webp";

const TrendingTopic = () => {
  return (
    <div className="mb-20">
      <h1 className="text-xl font-bold text-center mt-20 "> Trending Topics </h1>
      <div className=" bg-white w-10/12 mx-auto rounded-full">
        <div className="mx-auto w-10/12 py-10 grid grid-cols-6">
          <div className=" w-max text-center">
            <Image className="rounded-full" src={candle} alt="" width={80} height={100} />
            <p className="font-bold mt-2">Lifestyle</p>
          </div>
          <div className=" w-max text-center">
            <Image className="rounded-full" src={bird} alt="" width={80} height={100} />
            <p className="font-bold mt-2">Inspiration</p>
          </div>
          <div className=" w-max text-center">
            <Image className="rounded-full" src={boat} alt="" width={80} height={100} />
            <p className="font-bold mt-2">Technology</p>
          </div>
          <div className=" w-max text-center">
            <Image className="rounded-full" src={gitterman} alt="" width={80} height={100} />
            <p className="font-bold mt-2">Music</p>
          </div>
          <div className=" w-max text-center">
            <Image className="rounded-full" src={man} alt="" width={80} height={100} />
            <p className="font-bold mt-2">Travel</p>
          </div>

          <div className="flex text-md justify-center items-center gap-3">
            <p className="font-bold">or...</p>
            <button className="btn-style btn-style-color py-1 px-3 rounded-xl font-bold">Explore All</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingTopic;
