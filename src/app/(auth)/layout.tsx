export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="flex justify-center w-full h-[90vh] mx-auto px-5 pt-0 min-h-[90vh]">
    <div className="my-auto mb-auto mt-8 flex flex-col mx-auto">
      {children}
    </div>
  </div>
}
