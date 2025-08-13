"use client";
import { addToFavorite } from "@/app/_actions/addToFavorite";
import { Star } from "lucide-react";
import React from "react";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

interface FavoriteItem {
  id: number;
  type: string;
  isFavorite: boolean;
}

const AddToFavorite = (item: FavoriteItem) => {

  const [isInFavorite, setIsInFavorite] = React.useState(item.isFavorite);

  const showToast = (msg: string, color: string, time: number = 5000) => {
    toast(msg, {
      duration: time,
      style: {
        backgroundColor: color,
      },
    });
  };

  const [loading, setLoading] = React.useState(false);

  const handleAddToFavorite = async () => {
    setLoading(true);
    try {
      const res = await addToFavorite(item);
      console.log("🚀 ~ handleAddToFavorite ~ res:", res)
      if (res.bool) {
        console.log("Item added to favorite:", res.data.isFavorited);
        setIsInFavorite(res.data.isFavorited);
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
  return (
    <div>
      <Toaster closeButton position="bottom-center" />
      {
        loading ?
        <Star size={18} className="animate-spin bg-gray-200 hover:bg-green-300 absolute top-1 right-0  rounded-full"/>
        :
        
      <button
        disabled={loading}
        aria-label={`${isInFavorite ? "Remove from favorite" : "Add to favorite"}`}
        onClick={handleAddToFavorite}
        title={`${isInFavorite ? "Remove from favorite" : "Add to favorite"}`}
        className={`${isInFavorite ? 'bg-green-300': 'bg-gray-200'} hover:bg-green-300 absolute top-1 right-0  rounded-full p-1`}
      >
        <Star size={18} />
      </button>
      }
    </div>
  );
};

export default AddToFavorite;
