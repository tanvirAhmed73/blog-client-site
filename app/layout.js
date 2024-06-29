import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import AuthProvider from "@/lib/AuthProvider/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: ".blog",
  description: "Blog website made by next.js",
};

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className={inter.className}>
          {children}
        </body>
      </html>
    </AuthProvider>
  );
}
