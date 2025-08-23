"use client"

import { getUser, putUser } from "@/api/api";
import { User } from "@/api/interfaces";
import DashboardLayout from "@/app/dashboard/layout";
import Button from "@/components/shared/button";
import TextInput from "@/components/shared/text-input";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";

function useUserData(id: number) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [user, setUser] = useState<User>();

  useEffect(() => {
    getUser(id)
      .then((response) => {
        setUser(response.data.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  return { loading, error, user };
}

export default function UserEdit() {
  const params = useParams<{ id: string }>();
  const id = Number(params.id);
  const router = useRouter();
  const { user, loading, error } = useUserData(id);
  const showError = !loading && error;
  const ready = !showError && !loading;

  if(showError || !user)
    return error;

  const fullName = `${user.first_name} ${user.last_name}`;

  const saveChanges = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      const form = e.target as HTMLFormElement;
      const first_name = (form.elements.namedItem("first_name") as HTMLInputElement)?.value;
      const last_name = (form.elements.namedItem("last_name") as HTMLInputElement)?.value;
      const email = (form.elements.namedItem("email") as HTMLInputElement)?.value;

      putUser(id, { first_name, last_name, email })
        .then(() => {
          alert("User has been updated");
          router.push("/dashboard");
        }).catch((err) => {
          console.log(err);
          alert("Invalid credentials");
        })
    };

  return ready && <DashboardLayout>
    <form onSubmit={(e) => saveChanges(e)}>
      <div className="flex flex-row p-4 border-1 border-solid border-foreground mb-4 w-200">
        <Image
          className="mr-4"
          width={256}
          height={256}
          src={user.avatar}
          alt={fullName}
        />
        <div className="flex flex-col grow">
          <TextInput
            id="first_name"
            label="First Name"
            placeholder="First Name"
            name="first_name"
            htmlFor="first_name"
            value={user.first_name}
          />
          <TextInput
            id="last_name"
            label="Last Name"
            placeholder="Last Name"
            name="last_name"
            htmlFor="last_name"
            value={user.last_name}
          />
          <TextInput
            id="email"
            label="E-mail"
            placeholder="E-mail"
            name="email"
            htmlFor="email"
            type="email"
            value={user.email}
          />
        </div>
      </div>
      <Button type="submit">Save changes</Button>
    </form>
  </DashboardLayout>;
}
