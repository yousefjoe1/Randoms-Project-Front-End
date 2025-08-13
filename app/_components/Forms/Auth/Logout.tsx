'use client';
import { logout } from '@/app/_actions/logout';
import { LogOut } from 'lucide-react';
import React from 'react'

const Logout = () => {
    const handleLogout = async () => {
        await logout();
    };
  return (
    <>
      <button onClick={handleLogout} className="">
        <LogOut size={20} />
      </button>
    </>
  )
}

export default Logout
