import { Gauge, Home, Layers2, LayoutList, User } from "lucide-react";
import Link from "next/link";

const SlideBAr = () => {
  const link = [
    {
      name: "Home",
      link: "/",
      icon: <Home />,
    },
    {
      name: "Posts",
      link: "post",
      icon: <LayoutList />,
    },
    {
      name: "All Posts",
      link: "allPost",
      icon: <LayoutList />,
    },
    {
      name: "Categories",
      link: "categories",
      icon: <Layers2 />,
    },
    {
      name: "Author",
      link: "author",
      icon: <User />,
    },
  ];

  return (
    <div className="w-[300px] border-r h-screen p-6">
      <ul className="w-full flex flex-col gap-6 ">
        {link.map((item) => {
          return (
            <Link className="btnColor text-white rounded-full px-5 py-2" key={item} href={item.link}>
              <li className="flex items-center">
              {item.icon}
                <span className="font-bold">{item.name}</span>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default SlideBAr;
