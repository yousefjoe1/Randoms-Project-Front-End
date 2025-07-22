// 'use client';
import React from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import LoginForm from "./LoginForm";
import { AlertDialogTitle } from "@radix-ui/react-alert-dialog";
import RegisterForm from "./RegisterForm";
import { isTokenExist } from "@/app/_actions/isTokenExist";
import UserDetails from "../../User/UserDetails";
import Logout from "./Logout";

const Auth = async () => {
const token = await isTokenExist();
  const isAuth = token.bool; // Check if the user is authenticated based on the token
  // const [isAuth, setIsAuth] = React.useState(false);

  // React.useEffect(() => {
  //   const checkAuth = async () => {
  //     // Dynamically import to avoid SSR issues if needed
  //     const token = await isTokenExist();
  //     console.log("🚀 ~ checkAuth ~ token:", token)
  //     if (token.bool) {
  //       setIsAuth(true);
  //     } else {
  //       setIsAuth(false);
  //     }
  //   };

  //   checkAuth();
  // }, []);
  return (
    <div>
      {
        isAuth ?
        <div className="flex items-center justify-between gap-4">
          <UserDetails />
          <Logout />
        </div>
        :

      <AlertDialog>
        <AlertDialogTrigger className="sign-in-btn">
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
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogTitle></AlertDialogTitle>
          <LoginForm />
          <RegisterForm />
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            {/* <AlertDialogAction>Continue</AlertDialogAction> */}
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      }
    </div>
  );
};

export default Auth;
