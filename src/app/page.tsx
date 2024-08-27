"use client";

import LoginFrm from "@/components/loginFrm";
import SignUpFrm from "@/components/signUpFrm";
import { useState } from "react";

export default function AuthPg() {
  const [toggleFrm, setToggleFrm] = useState(false);

  return (
    <main className="w-full h-screen flex justify-center items-center">
      <div className="flex w-full max-w-[800px] rounded-lg shadow-lg">
        <aside className="w-1/2 rounded-l-lg bg-store bg-no-repeat bg-cover">
          <div className="w-full h-full py-20 rounded-l-lg flex flex-col items-center justify-end bg-gray bg-opacity-75 dark:bg-darkBlue dark:bg-opacity-70">
            <h1 className="uppercase text-4xl text-darkBlue dark:text-white font-medium mb-4">
              Get Started
            </h1>
            <a
              href=""
              className="w-60 text-center py-2 uppercase font-medium text-white dark:text-darkBlue bg-darkBlue dark:bg-white rounded"
            >
              Sign In with Google
            </a>
            <a
              href=""
              className="w-60 text-center py-2 uppercase font-medium text-white dark:text-darkBlue bg-darkBlue dark:bg-white rounded mt-2"
            >
              Sign In with Github
            </a>
          </div>
        </aside>
        <aside className="w-1/2 h-[500px] rounded-r-lg bg-gray dark:bg-darkBlue px-8 pt-10 pb-20">
          <nav className="flex justify-end mb-16">
            <a
              onClick={() => setToggleFrm(false)}
              className={`py-1 px-3 text-sm font-medium border border-darkBlue dark:border-white cursor-pointer ${
                toggleFrm ? "bg-white text-darkBlue" : "bg-darkBlue text-white"
              } `}
            >
              Login
            </a>
            <a
              onClick={() => setToggleFrm(true)}
              className={`py-1 px-3 text-sm font-medium border border-darkBlue dark:border-white cursor-pointer ${
                toggleFrm ? "bg-darkBlue text-white" : "bg-white text-darkBlue"
              }`}
            >
              Register
            </a>
          </nav>
          {!toggleFrm && <LoginFrm />}
          {toggleFrm && <SignUpFrm />}
        </aside>
      </div>
    </main>
  );
}
