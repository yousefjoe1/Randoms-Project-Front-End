import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { Laugh, Notebook, Quote } from "lucide-react";
import Link from "next/link";
import React from "react";

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
      <div className="flex gap-4 items-center">
        <SignedOut>
          <SignInButton>
            <button className="sign-in-btn flex text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
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
            </button>
          </SignInButton>
          <SignUpButton>
            <button className="sign-in-btn flex text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
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
              <span>Sign Up</span>
            </button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default NavBar;
