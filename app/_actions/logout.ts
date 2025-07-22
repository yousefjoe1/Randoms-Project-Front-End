'use server'
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';


export async function logout() {

   (await cookies()).delete('userToken')
    revalidatePath('/')
}