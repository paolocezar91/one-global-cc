"use client";

import { redirect } from 'next/navigation';

export default function Home() {
  const userToken = localStorage.getItem("userToken");
  if(!userToken) {
    redirect('/login');
  } else {
    redirect("/dashboard");
  }
}
