import LoginButton from "./LoginButton";
import AuthProvider from "@/lib/AuthProvider/AuthProvider";
import SearchBar from "@/lib/serachBar/SearchBar";
import Link from "next/link";

const Header = () => {
  return (
    <div className="relative">
      <section className="flex top-5 justify-between bg-white text-black w-10/12 mx-auto rounded-2xl items-center px-7 py-3 border-b z-10">
        <Link href={"/"}>
          <h1 className="text-3xl iconColor font-extrabold">.blog</h1>
        </Link>
        <div className="cursor-pointer">
          <SearchBar />
        </div>
        <AuthProvider>
          <LoginButton />
        </AuthProvider>
      </section>
    </div>
  );
};

export default Header;
