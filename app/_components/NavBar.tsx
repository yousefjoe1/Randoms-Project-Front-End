import { Laugh, Notebook, Quote } from "lucide-react";
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

      {/* <Link href={"/"} className="sign-in-btn">
        <div className="svg-wrapper-1">
          <div className="svg-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fill="currentColor"
                d="M10 17v-3H3v-4h7V7l5 5-5 5zm9-12H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7l-6-6z"
              />
            </svg>
          </div>
        </div>
        <span>Sign In</span>
      </Link> */}
      <Auth />
    </nav>
  );
};

export default NavBar;
