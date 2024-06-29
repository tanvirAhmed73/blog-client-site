"use client";
import { AuthContext } from "@/lib/AuthProvider/AuthProvider";
import { useRouter } from "next/navigation";
import { useContext } from "react";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const routes = useRouter();
  if (loading) {
    return (
      <div class="min-h-screen flex justify-center items-center">
        <span class="loading loading-spinner text-success"></span>
      </div>
    );
  }
  if (user?.email) {
    return children;
  }
  return routes.push("/");
};

export default PrivateRoutes;
