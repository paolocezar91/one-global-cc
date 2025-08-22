"use client";

import { login } from "@/api/api";
import Button from "@/components/shared/button";
import PasswordInput from "@/components/shared/password-input";
import TextInput from "@/components/shared/text-input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import AuthLayout from "../layout";

export default function Login() {
  const router = useRouter();
  const userToken = localStorage.getItem("userToken");

  if(userToken) {
    router.push("/dashboard");
    return;
  }

  const doLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)?.value;
    
    login({ email, password })
      .then((res) => {
        // Storing user token on local storage only for this demo
        // On real application we should not store it in this way.
        localStorage.setItem("userToken", JSON.stringify(res.data.token));
        router.push("/dashboard");
      }).catch((err) => {
        console.log(err);
        alert("Invalid credentials");
      })
  };

  return <>
    <p className="text-xl font-bold text-foreground">Sign In</p>
    <form onSubmit={(e) => doLogin(e)} className="w-100 mb-4 mt-2 border-2 border-color-foreground border-solid rounded-lg px-8 py-6">
      <div className="grid gap-2">
        <div className="grid gap-1 mb-4">
          <TextInput className="mb-1" id="email" name="email" placeholder="example@email.com" type="email" htmlFor="email" label="E-mail" />
          <PasswordInput id="password" name="password" htmlFor="password" placeholder="Password" label="Password" />
        </div>
        <Button type="submit" size="lg">Sign in</Button>
      </div>
    </form>
    <p>
      <Link href="/register" className="font-medium text-foreground text-sm hover:underline">
        Not registered? Click here to register for an account!
      </Link>
    </p>
  </>;
}