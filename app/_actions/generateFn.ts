"use server";
import axios from "axios";
// import { revalidatePath } from 'next/cache';
import { cookies } from "next/headers";

export async function generateFn(type: string) {
  const token = (await cookies()).get("userToken")?.value;

  if (token) {
    const url = process.env.NEXT_PUBLIC_DB;

    try {
      const response = await axios.get(`${url}/api/generate?type=${type}`, {
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
