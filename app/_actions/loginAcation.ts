'use server'
import axios from 'axios'; // Import axios
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';

type Inputs = {
    email: string;
    password: string;
  };

export async function loginAction(data:Inputs) {
  const url = process.env.NEXT_PUBLIC_DB

  try {
    const response = await axios.post(`${url}/api/login`,data); // Replace with your actual endpoint
    // Handle successful response
    (await cookies()).set('userToken',response.data.token)
    revalidatePath('/login')
    revalidatePath('/')
    
    return response.data; // Return the fetched data

  } catch (err:unknown) {
    return {err}
  }
}