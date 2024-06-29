import { CirclePlus } from "lucide-react";
import Link from "next/link";
import React from "react";
import CategoriesListView from "./components/CategoriesListView";

const page = () => {
  return (
    <div className="p-6 w-full">
      <div className="flex justify-between items-center mb-3">
        <h1 className="font-bold">Category:</h1>
        <Link href={'/categories/form'}>
          <di v className="flex gap-2 items-center btnColor btn-style px-4 py-2  text-white rounded-full font-bold">
            <CirclePlus />
            add
          </di>
        </Link>
      </div>
      <CategoriesListView/>
    </div>
  );
};

export default page;
