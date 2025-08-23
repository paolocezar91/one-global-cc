"use client";

import Header from "@/components/layout/header";
import Button from "@/components/shared/button";
import NavLink from "@/components/shared/nav-link";
import { useRouter } from "next/navigation";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) { 
   const router = useRouter();
   
   const doLogout = () => {
     localStorage.removeItem("userToken");
     router.push("/login");
  }

  const leftChildren = <p>
    1Global Coding Challenge
  </p>;

  const rightChildren = <div className="flex">
    <NavLink className="w-full mr-2" href="dashboard/">Dashboard</NavLink>
    <Button className="w-full" type="button" onClick={() => doLogout()}>Sign out</Button>
  </div>;

  return <div className="relative">
    <Header leftChildren={leftChildren} rightChildren={rightChildren} />
    <div className="flex justify-center w-full h-[92vh] pt-[8vh] mx-auto px-5 min-h-[90vh]">
      <div className="my-auto mb-auto mt-8 flex flex-col mx-auto">
        {children}
      </div>
    </div>
  </div>;
}
