"use client";
import { generateFn } from "@/app/_actions/generateFn";
import { Toaster } from "@/components/ui/sonner";
import { Loader2 } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";

interface DataType {
  data: { text: string; author: string } | null; // Adjusted to match the expected structure
  text: string;
  author: string;
  id: number;
  // Add other properties if needed
}

const Generate = () => {
  const showToast = (msg: string, color: string, time: number = 5000) => {
    toast(msg, {
      duration: time,
      // className: `border-t-4 border-${color}-500 rounded-b text-${color}-900 px-4 py-3 shadow-md`,
    });
  };

  const [data, setData] = useState<DataType | null>(null);
  const [loading, setLoading] = useState(false);

  const genratingType = ["advice", "quote", "joke"];
  const [currentType, setCurrentType] = useState("advice");

  const getFn = async () => {
    setLoading(true);
    try {
      const res = await generateFn(currentType);
      console.log("🚀 ~ getFn ~ res:", res);
      setData(null); // Reset data before fetching new data

      setTimeout(() => {
        if (res && res.data) {
          if (res.data) {
            showToast(`${currentType} Generated`, "green");
          }
          setData(res.data);
        } else {
          setLoading(true);
          setData(null);
          showToast("No data found", "yellow");
        }
        
      }, 500);
      // Optionally log for debugging
      // console.log("🚀 ~ res ~ res:", res)
    } catch (error) {
      setData(null);
      console.error("Error fetching data:", error);
      showToast("Failed to fetch data", "red");
    } finally {
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   const getFn = async () => {
  //     setLoading(true);
  //     try {
  //       const res = await generateFn(currentType);
  //       console.log("🚀 ~ getFn ~ res:", res)
  //       if (res && res.data) {
  //         if (res.data) {
  //           showToast(`${currentType} Generated`, 'green');
  //         }
  //         setData(res.data);
  //       } else {
  //         setData(null);
  //         showToast('No data found', 'yellow');
  //       }
  //       // Optionally log for debugging
  //       // console.log("🚀 ~ res ~ res:", res)
  //     } catch (error) {
  //       setData(null);
  //       console.error("Error fetching data:", error);
  //       showToast('Failed to fetch data', 'red');
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //   getFn()
  // }, [refetch]);

  return (
    <div className="lg:w-1/2 w-full mx-3 flex flex-col gap-3 items-center bg-gray-300 rounded-xl py-2">
      <Toaster closeButton position="bottom-center" />

      <div>
        {genratingType.map((type, index) => (
          <button
            title={type}
            key={index}
            className={`${
              currentType == type ? "bg-blue-400" : ""
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
          className={`bg-gray-100 p-2 text-base mt-4 rounded-lg mx-3 transition-all duration-[3000ms] ${data === null ? "transition-all duration-[3000ms] w-[0%] h-[0px] opacity-0 pointer-events-none" : "min-h-[100px] opacity-100 w-full"}`}
          style={{
            maxHeight: data === null ? 0 : 500,
            overflow: "hidden",
            transition: "opacity 1s, max-height 1s"
          }}
        >
          {data !== null && data?.data !== null && (
            <div>
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
