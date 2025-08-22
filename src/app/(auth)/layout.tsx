import Header from "@/components/layout/header";
import NavLink from "@/components/shared/nav-link";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const leftChildren = <p>
    1Global Coding Challenge
  </p>;
  
  const rightChildren = <div className="flex">
    <NavLink href="register/" className="mr-2">Register</NavLink>
    <NavLink href="login/">Login</NavLink>
  </div>;

  return <div className="relative">
    <Header leftChildren={leftChildren} rightChildren={rightChildren} />
    <div className="flex justify-center w-full h-[92vh] pt-[8vh] mx-auto px-5 min-h-[90vh]">
      <div className="my-auto mb-auto mt-8 flex flex-col mx-auto">
        {children}
      </div>
    </div>
  </div>
}
