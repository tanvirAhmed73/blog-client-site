"use client";

import AuthProvider, { AuthContext } from "@/lib/AuthProvider/AuthProvider";
import SlideBAr from "./components/SlideBAr";
import PrivateRoutes from "../privateRoutes/privateRoutes";
import Header from "../components/Header/Header";

const layout = ({ children }) => {
  return (
    <AuthProvider>
      <PrivateRoutes>
        <Header/>
        <div className="flex">
          <SlideBAr />
          {children}
        </div>
      </PrivateRoutes>
    </AuthProvider>
  );
};

export default layout;
