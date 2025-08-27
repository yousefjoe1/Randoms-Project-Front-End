"use client";
import { addToFavorite } from "@/app/_actions/addToFavorite";
import { CircleCheckBig, Star, ThumbsUp } from "lucide-react";
import React from "react";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { likeFn } from "@/app/_actions/likeItFn";

interface FavoriteItem {
  id: number;
  type: string;
  isFavorite: boolean;
  isLiked?: boolean;
}

const AddToFavorite = (item: FavoriteItem) => {
  const [isInFavorite, setIsInFavorite] = React.useState(item.isFavorite);

  const [isLiked, setIsLiked] = React.useState(item.isLiked);

  const showToast = (msg: string, color: string, time: number = 5000) => {
    toast(msg, {
      duration: time,
      style: {
        backgroundColor: color,
      },
    });
  };

  const [loading, setLoading] = React.useState(false);

  const [likeLoading, setLikeLoading] = React.useState(false);

  const handleAddToFavorite = async () => {
    setLoading(true);
    try {
      const res = await addToFavorite(item);
      if (res.bool) {
        setIsInFavorite(res.data.isFavorite);
        showToast(res.data.msg, "lightgreen");
      } else {
        showToast("Failed to add item to favorite", "red");
      }
    } catch (error) {
      console.error("Error adding item to favorite:", error);
      showToast("Error adding item to favorite", "red");
    } finally {
      setLoading(false);
    }
  };
  const handleLikes = async () => {
    setLikeLoading(true);
    try {
      const res = await likeFn(item);
      console.log("🚀 ~ handleLikes ~ res:", res);
      if (res.bool) {
        setIsLiked(res.data.isLiked);
        showToast(res.data.msg, "lightgreen");
      } else {
        showToast("Failed to add item to favorite", "red");
      }
    } catch (error) {
      console.error("Error adding item to favorite:", error);
      showToast("Error adding item to favorite", "red");
    } finally {
      setLikeLoading(false);
    }
  };
  return (
    <div>
      <Toaster closeButton position="bottom-center" />
      {loading ? (
        <Star
          size={18}
          className="animate-spin text-green-700 absolute top-1 right-0  rounded-full"
        />
      ) : (
        <button
          disabled={loading}
          aria-label={`${
            isInFavorite ? "Remove from favorite" : "Add to favorite"
          }`}
          onClick={handleAddToFavorite}
          title={`${isInFavorite ? "Remove from favorite" : "Add to favorite"}`}
          className={`${
            isInFavorite ? "bg-blue-300" : "bg-gray-200 hover:bg-green-300"
          }  absolute top-1 right-0  rounded-full p-1`}
        >
          {isInFavorite && <CircleCheckBig color="green" size={16} className="absolute -left-1 -top-1" />}

          <Star size={18} />
        </button>
      )}

      {likeLoading ? (
        <ThumbsUp
          size={18}
          className="animate-spin text-green-700 absolute top-1 left-0  rounded-full"
        />
      ) : (
        <button
          disabled={likeLoading}
          aria-label={`${isLiked ? "Remove from favorite" : "Add to favorite"}`}
          onClick={handleLikes}
          title={`${isLiked ? "Not So Cool" : "I Like It"}`}
          className={`${
            isLiked ? "bg-blue-300" : "bg-gray-200 hover:bg-[lightblue]"
          }  absolute top-1 left-0  rounded-full p-1`}
        >
          {
            isLiked &&
          <CircleCheckBig color="green" size={16} className="absolute -left-1 -top-1" />
          }
          <ThumbsUp size={18} />
        </button>
      )}
    </div>
  );
};

export default AddToFavorite;
