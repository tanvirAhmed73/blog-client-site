"use client";

import { AuthContext } from "@/lib/AuthProvider/AuthProvider";
import Link from "next/link";
import { useContext } from "react";
import "@/shared/btn-shared.css";
import Image from "next/image";

const LoginButton = () => {
  const { signInwithGoogle, user, logOut } = useContext(AuthContext);
  const handleGoogleLOgin = () => {
    signInwithGoogle().then((userCrediential) => {
      const userName = userCrediential.user.displayName;
      const useremail = userCrediential.user.email;
      const photoUrl = userCrediential.user.photoURL;
      const authorsData = { userName, useremail, photoUrl };
      fetch("https://lynea-server.vercel.app/authors", {
        method: "POST",
        cache: "no-cache",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(authorsData),
      });
    });
  };
  const handlelogOut = () => {
    return logOut();
  };
  return (
    <div>
      {user ? (
        <div className="flex  items-center">
          <button
            onClick={handlelogOut}
            className="btnColor text-white px-4 rounded-full"
          >
            Log Out
          </button>
          <Link href={"/allPost"}>
            <div className="tooltip tooltip-bottom" data-tip="DashBoard">
              <button className="p-4 flex justify-center items-center">
                <Image
                  src={user?.photoURL}
                  alt="userImage"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-red-400 cursor-pointer"
                />&gt;
              </button>
            </div>
          </Link>
        </div>
      ) : (
        <button
          onClick={handleGoogleLOgin}
          className="iconColor btn btn-color text-white px-4 py-2 rounded-full"
        >
          Login with google
        </button>
      )}
    </div>
  );
};

export default LoginButton;
