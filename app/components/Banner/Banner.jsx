import Image from "next/image";

const Banner = () => {
  return (
    <div className="flex w-4/5 mx-auto gap-4  justify-center items-center mt-20">
      <div className="w-1/2">
        <p className="font-bold text-4xl mb-10">
          Hey, I’m <span className="iconColor">Jonathan Doe</span>
        </p>
        <p className="text-xl">
          I’m a <span className="font-bold">design technologist</span> in
          Atlanta. I like working on the front-end of the web. This is my site,{" "}
          <span className="font-bold">Zento</span> where I blog, share and write
          about my personal projects..
        </p>

        <div className="mt-10 ">
          <h1 className="font-bold"> Let&apos;s  Connect</h1>
          <div className="input input-bordered flex w-max justify-center items-center">
            <input className="input"type="text" placeholder="Enter Your Email Address" />
            <button className="btn-style p-3  btn-style-color">Get Started</button>
          </div>
        </div>
      </div>

      <div>
        <Image
          className="hero-image"
          src={
            "https://themes.estudiopatagon.com/wordpress/zento-personal/wp-content/uploads/2024/03/about-personal.webp"
          }
          alt="bannerIMage"
          width={400}
          height={300}
        ></Image>
      </div>
    </div>
  );
};

export default Banner;
