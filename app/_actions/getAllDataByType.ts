"use server";
import axios from "axios";
// import { revalidatePath } from 'next/cache';
import { cookies } from "next/headers";

export async function getAllDataByType(type: string,pageNumber: string) {
  const token = (await cookies()).get("userToken")?.value;

  if (token) {
    const url = process.env.NEXT_PUBLIC_DB;

    try {
      const response = await axios.get(`${url}/api/get-items?type=${type}&page=${pageNumber}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      return { data: response.data, bool: true, tok: token }; // Return the fetched data
    } catch (err: unknown) {
      return { err };
    }
  } else {
    return { bool: false, tok: "" };
  }
}
