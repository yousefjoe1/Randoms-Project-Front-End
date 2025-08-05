"use client";
import { generateFn } from "@/app/_actions/generateFn";
import { Toaster } from "@/components/ui/sonner";
import { CircleQuestionMark, Loader2, Shuffle } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";

interface DataType {
  data: { text: string; author: string; type: string } | null; // Adjusted to match the expected structure
  text: string;
  author: string;
  id: number;
}

const Generate = () => {
  const showToast = (msg: string, color: string, time: number = 5000) => {
    toast(msg, {
      duration: time,
      style: {
        backgroundColor: color,
      },
    });
  };

  const [data, setData] = useState<DataType | null>(null);
  const [loading, setLoading] = useState(false);

  const genratingType = ["advice", "quote", "joke"];
  const [currentType, setCurrentType] = useState("random");

  const getFn = async () => {
    setLoading(true);
    try {
      const res = await generateFn(currentType);
      setData(null); // Reset data before fetching new data

      setTimeout(() => {
        if (res && res.data) {
          if (res.data) {
            showToast(`${currentType} Generated`, "lightgreen");
          }
          setData(res.data);
        } else {
          setLoading(true);
          setData(null);
          showToast("No data found", "yellow");
        }
        setLoading(false);
      }, 500);
      setLoading(false);
    } catch (error) {
      setData(null);
      console.error("Error fetching data:", error);
      showToast("Failed to fetch data", "red");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="lg:w-1/2 w-full mx-3 flex flex-col gap-3 items-center bg-gray-300 rounded-xl py-2">
      <Toaster closeButton position="bottom-center" />

      {currentType !== "random" ? (
        <button
          onClick={() => setCurrentType("random")}
          title="Random Type"
          className="full-center w-9 h-9 bg-gray-100 hover:bg-blue-300 rounded-full"
        >
          <Shuffle />
        </button>
      ) : (
        <button
          onClick={() => setCurrentType("advice")}
          title="Show Types"
          className="full-center w-9 h-9 bg-gray-100 hover:bg-blue-300 rounded-full"
        >
          <CircleQuestionMark />
        </button>
      )}

      <div
        className={`${
          currentType == "random" ? "h-0 overflow-hidden" : "h-[60px]"
        } transition-all duration-[1000ms] flex items-start w-full justify-center`}
      >
        {genratingType.map((type, index) => (
          <button
            title={type}
            key={index}
            className={`${
              currentType == type ? "bg-blue-400" : "shadow-sm"
            } p-2 rounded-xl inline-flex items-center mr-4 transition-colors duration-300 hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500`}
            onClick={() => setCurrentType(type)}
          >
            <span className="ml-2 capitalize">{type}</span>
          </button>
        ))}
      </div>

      <button
        onClick={() => getFn()}
        disabled={loading}
        style={{
          opacity: loading ? 0.6 : 1,
          cursor: loading ? "not-allowed" : "pointer",
          pointerEvents: loading ? "none" : "auto",
          transition: "opacity 0.3s",
        }}
        type="submit"
        className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {!loading ? (
          <> Get {currentType.charAt(0).toUpperCase() + currentType.slice(1)}</>
        ) : (
          <Loader2 className="animate-spin" />
        )}
      </button>

      <div>
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
            <div>
              <p className="w-fit mx-auto p-1 px-2 mb-2 bg-blue-300 rounded-xl capitalize">
                {data.data.type}
              </p>
              {data.data.text}

              <h4 className="bg-blue-300 p-2 rounded-xl w-fit mt-3">
                Author : <b>{data.data.author}</b>
              </h4>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Generate;
