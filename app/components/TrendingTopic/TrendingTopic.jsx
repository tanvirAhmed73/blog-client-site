import bird from "@/assets/trendingTopics/bird.webp";
import boat from "@/assets/trendingTopics/boat.webp";
import candle from "@/assets/trendingTopics/candle.webp";
import gitterman from "@/assets/trendingTopics/gitterman.webp";
import man from "@/assets/trendingTopics/man.webp";
import Image from "next/image";

const TrendingTopic = () => {
  return (
    <div className="mb-20 px-4">
      <h1 className="text-2xl font-bold text-center my-10">Trending Topics</h1>
      <div className="bg-white shadow-md rounded-lg py-6 px-4 mx-auto max-w-6xl">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          <div className="text-center flex flex-col items-center">
            <Image
              className="rounded-full"
              src={candle}
              alt="Lifestyle"
              width={80}
              height={80}
            />
            <p className="font-semibold mt-2">Lifestyle</p>
          </div>
          <div className="text-center flex flex-col items-center">
            <Image
              className="rounded-full"
              src={bird}
              alt="Inspiration"
              width={80}
              height={80}
            />
            <p className="font-semibold mt-2">Inspiration</p>
          </div>
          <div className="text-center flex flex-col items-center">
            <Image
              className="rounded-full"
              src={boat}
              alt="Technology"
              width={80}
              height={80}
            />
            <p className="font-semibold mt-2">Technology</p>
          </div>
          <div className="text-center flex flex-col items-center">
            <Image
              className="rounded-full"
              src={gitterman}
              alt="Music"
              width={80}
              height={80}
            />
            <p className="font-semibold mt-2">Music</p>
          </div>
          <div className="text-center flex flex-col items-center">
            <Image
              className="rounded-full"
              src={man}
              alt="Travel"
              width={80}
              height={80}
            />
            <p className="font-semibold mt-2">Travel</p>
          </div>

          <div className="text-center flex flex-col items-center col-span-full mt-6">
            <p className="font-semibold text-md mb-2">or...</p>
            <button className="bg-gray-800 text-white py-2 px-4 rounded-lg font-semibold hover:bg-gray-700 transition duration-300 ease-in-out">
              Explore All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingTopic;
