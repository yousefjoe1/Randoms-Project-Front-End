import { Laugh, Notebook, Quote} from "lucide-react";
import Link from "next/link";
import React from "react";
import Auth from "./Forms/Auth/Auth";

const NavBar = () => {
  return (
    <nav className="bg-gray-400 p-4 flex justify-between items-center">
      <Link href={"/"} className="text-xl font-semibold flex gap-3">
        <Notebook />
        <Quote />
        <Laugh />
      </Link>


        <Auth />
    </nav>
  );
};

export default NavBar;
