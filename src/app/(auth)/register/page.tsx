"use client";

import { register } from "@/api/api";
import Button from "@/components/shared/button";
import PasswordInput from "@/components/shared/password-input";
import TextInput from "@/components/shared/text-input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";

export default function Register() {
  const router = useRouter();

  useEffect(() => {
    const userToken = localStorage.getItem("userToken");
    if (userToken) {
      router.push("/dashboard");
    }
  }, [router]);

  const [isDisabled, setIsDisabled] = useState(true);
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const doRegister = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value;
    register({ email, password });
  };

  const checkPassword = (pwd: string, repeatPwd: string) => {
    setIsDisabled(!(pwd && repeatPwd && pwd === repeatPwd));
  };

  return <>
    <p className="text-xl font-bold text-foreground">Sign Up</p>
    <form onSubmit={doRegister} className="w-100 mb-4 mt-2 border-2 border-color-foreground border-solid rounded-lg px-8 py-6">
      <div className="grid gap-2">
        <div className="grid gap-1 mb-4">
          <TextInput className="mb-1" id="email" name="email" placeholder="example@email.com" type="email" htmlFor="email" label="E-mail" />
          <PasswordInput
            className="mb-1"
            id="password"
            name="password"
            htmlFor="password"
            placeholder="Password"
            label="Password"
            onChange={e => {
              const val = (e.target as HTMLInputElement).value;
              setPassword(val);
              checkPassword(val, repeatPassword);
            }}
          />
          <PasswordInput
            id="repeat-password"
            name="repeat-password"
            htmlFor="repeat-password"
            placeholder="Repeat Password"
            label="Repeat Password"
            onChange={e => {
              const val = (e.target as HTMLInputElement).value;
              setRepeatPassword(val);
              checkPassword(password, val);
            }}
          />
        </div>
        <Button disabled={isDisabled} type="submit" size="lg">Register</Button>
      </div>
    </form>
    <p>
      <Link href="/login" className="font-medium text-foreground text-sm hover:underline">
        &lt; Back to Login
      </Link>
    </p>
  </>;
}