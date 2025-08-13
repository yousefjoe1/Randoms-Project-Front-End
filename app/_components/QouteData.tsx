import React from "react";
import { generateFn } from "../_actions/generateFn";
import AddToFavorite from "./Forms/AddToFavorite";

const QouteData = async () => {
  const data = await generateFn('random');

  return (
    <div>
      <div className="w-[90%] mx-auto ">
        <div
          className={`bg-gray-100 p-2 px-4 text-base mt-4 rounded-lg mx-3 transition-all duration-[3000ms] ${
            data === null
              ? "transition-all duration-[3000ms] w-[0%] h-[0px] opacity-0 pointer-events-none"
              : "min-h-[100px] lg:min-w-[400px] opacity-100 "
          }`}
          style={{
            maxHeight: data === null ? 0 : 500,
            overflow: "hidden",
            transition: "opacity 1s, max-height 1s",
          }}
        >
          {data !== null && data?.data !== null && (
            <div className="relative">
              <AddToFavorite />
              <p className="w-fit mx-auto font-semibold p-1 px-2 mb-2 bg-blue-300 rounded-xl capitalize">
                {data?.data?.data?.type}
              </p>
              {data?.data?.data?.text}

              <h4 className="bg-blue-300 p-2 rounded-xl w-fit mt-3">
                Author : <b>{data?.data?.data?.author}</b>
              </h4>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QouteData;
