import Image from "next/image";

const Banner = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row w-4/5 mx-auto gap-8 justify-center items-center mt-16 lg:mt-24">
      <div className="w-full lg:w-1/2">
        <p className="font-bold text-3xl sm:text-4xl lg:text-5xl mb-6 lg:mb-10">
          Hey, I’m <span className="iconColor">Jonathan Doe</span>
        </p>
        <p className="text-lg sm:text-xl">
          I’m a <span className="font-bold">design technologist</span> based in
          Atlanta. I like working on the front-end of the web. This is my site,{" "}
          <span className="font-bold">Zento</span> where I blog, share, and
          write about my personal projects.
        </p>

        <div className="mt-8 lg:mt-12">
          <h1 className="font-bold text-xl mb-4">Let&apos;s Connect</h1>
          <div className="flex w-full max-w-lg items-center border rounded-full p-2">
            <input
              className="w-full p-2 rounded-l-full focus:outline-none"
              type="text"
              placeholder="Enter Your Email Address"
            />
            <button className="btn-style px-6 py-3 btn-style-color rounded-full">
              Get Started
            </button>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex justify-center">
        <Image
          className="hero-image rounded-lg"
          src={
            "https://themes.estudiopatagon.com/wordpress/zento-personal/wp-content/uploads/2024/03/about-personal.webp"
          }
          alt="bannerImage"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
};

export default Banner;
