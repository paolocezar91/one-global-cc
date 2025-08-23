interface HeaderInterface {
    leftChildren?: React.ReactNode;
    rightChildren?: React.ReactNode;
}
export default function Header({ leftChildren, rightChildren }: Readonly<HeaderInterface>) {
    return <header className="w-full flex justify-between items-center bg-zinc-800 p-4 absolute top-0 h-[8vh] text-white">
      <div className="flex">{leftChildren}</div>
      <div className="flex">{rightChildren}</div>
    </header>
}