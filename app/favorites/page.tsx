import React from "react";
import { getAllDataByType } from "../_actions/getAllDataByType";
import Image from "next/image";

type FavoriteItem = {
  itemContent: {
    text: string;
    author: string;
  };
  contentId: number;
  contentType: string;
  isFavorite: boolean;
  isLiked: boolean;
  id: string;
};

const page = async () => {
  const data = await getAllDataByType("favorite", "10");
  console.log("🚀 ~ page ~ data:", data.data.data);

  return (
    <div>
      <h3>fav</h3>

      {data.data.data.map((item: FavoriteItem) => (
        <div
          key={item.id}
          className="rounded-xl p-2 bg-blue-500/50 lg:w-[500px] w-full mx-auto my-4"
        >
          <div className="flex items-center justify-center">
            <Image
              src="/qoute-image.png"
              alt="Qoute Image"
              width={100}
              height={100}
              // className="opacity-50"
            />
            <div className="bg-white h-3 w-full flex-1" />
          </div>

          <p className="text-white px-4">{item.itemContent.text}</p>

          <div className="flex items-center justify-center">
            <div className="flex-flex-col w-full">
              <p className="px-4 text-white">Author : {item.itemContent.author} </p>
              <div className="bg-white h-3 w-full flex-1" />
            </div>
            <Image
              src="/qoute-image.png"
              alt="Qoute Image"
              width={100}
              height={100}
              className="rotate-180"
            />
          </div>


        </div>
      ))}
    </div>
  );
};

export default page;
