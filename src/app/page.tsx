"use client";

import { redirect } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const userToken = localStorage.getItem("userToken");
    if(!userToken) {
      redirect('/login');
    } else {
      redirect("/dashboard");
    }
  }, []);
}
