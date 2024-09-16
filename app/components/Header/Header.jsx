import SearchBar from "@/lib/serachBar/SearchBar";
import Link from "next/link";

const Header = () => {
  return (
    <div className="relative">
      <section className="flex flex-col md:flex-row top-5 justify-between bg-white text-black w-full md:w-10/12 mx-auto rounded-xl items-center px-5 md:px-8 py-4 shadow-lg border-b z-10">
        <Link href={"/"}>
          <h1 className="text-2xl sm:text-3xl md:text-4xl iconColor font-bold md:mr-8">
            .blog
          </h1>
        </Link>

        <div className="w-full flex justify-center mt-3 md:mt-0 md:w-6/12">
          <SearchBar />
        </div>

        <div className="mt-3 md:mt-0">
          <Link href={"/login-page"}>
            <button className="iconColor text-white px-6 py-2 rounded-full shadow-md transition duration-300 ease-in-out">
              Login
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Header;
