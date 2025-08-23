"use client";

import Header from "@/components/layout/header";
import Button from "@/components/shared/button";
import NavLink from "@/components/shared/nav-link";
import { useRouter } from "next/navigation";
import { useTheme } from "@/api/theme";


export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const [theme, toggleTheme] = useTheme();

  const doLogout = () => {
    localStorage.removeItem("userToken");
    router.push("/login");
  };

  const leftChildren = <p>
    User Management Coding Challenge
  </p>;

  const rightChildren = (
    <>
      <Button className="w-fit mr-2" type="button" onClick={toggleTheme}>
        {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
      </Button>
      <NavLink className="w-fit text-center mr-2" href="/dashboard/">Dashboard</NavLink>
      <Button className="w-fit" type="button" onClick={doLogout}>Sign out</Button>
    </>
  );

  return (
    <div className="relative">
      <Header leftChildren={leftChildren} rightChildren={rightChildren} />
      <div className="flex justify-center w-full h-[92vh] pt-[8vh] mx-auto px-5 min-h-[90vh]">
        <div className="my-auto mb-auto mt-8 flex flex-col mx-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
