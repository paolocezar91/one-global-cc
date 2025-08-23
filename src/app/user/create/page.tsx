"use client"

import { postUser } from "@/api/api";
import DashboardLayout from "@/app/dashboard/layout";
import Button from "@/components/shared/button";
import TextInput from "@/components/shared/text-input";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";


export default function UserCreate() {
  const router = useRouter();

  const saveChanges = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      const form = e.target as HTMLFormElement;
      const first_name = (form.elements.namedItem("first_name") as HTMLInputElement)?.value;
      const last_name = (form.elements.namedItem("last_name") as HTMLInputElement)?.value;
      const email = (form.elements.namedItem("email") as HTMLInputElement)?.value;

      postUser({ first_name, last_name, email })
        .then(() => {
          alert("User has been created");
          router.push("/dashboard");
        }).catch((err) => {
          console.log(err);
          alert("Invalid credentials");
        })
    };

  return <DashboardLayout>
    <form onSubmit={(e) => saveChanges(e)}>
      <div className="flex flex-row p-4 border-1 border-solid border-foreground mb-4 w-200">
        <div className="flex flex-col grow">
          <TextInput
            id="first_name"
            label="First Name"
            placeholder="First Name"
            name="first_name"
            htmlFor="first_name"
          />
          <TextInput
            id="last_name"
            label="Last Name"
            placeholder="Last Name"
            name="last_name"
            htmlFor="last_name"
          />
          <TextInput
            id="email"
            label="E-mail"
            placeholder="E-mail"
            name="email"
            htmlFor="email"
            type="email"
          />
        </div>
      </div>
      <Button type="submit">Save changes</Button>
    </form>
  </DashboardLayout>;
}
