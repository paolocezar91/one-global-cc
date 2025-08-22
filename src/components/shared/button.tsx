interface ButtonInterface { children: React.ReactNode, color?: string, size?: string, type?: "submit" | "reset" | "button", disabled?: boolean }

export default function Button({ children, type, color = 'background', size = 'md', disabled }: Readonly<ButtonInterface>) {
  const paddingSizes: Record<string, string> = {
    xs: "px-1 py-1",
    md: "px-2 py-2",
    base: "px-3 py-3",
    lg: "px-4 py-4",
    xl: "px-4 py-4",
  }

  const textSizes: Record<string, string> = {
    xs: "text-xs",
    md: "text-md",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
  }

  const colors: Record<string, string> = {
    background: "bg-background text-foreground border-foreground",
    foreground: "bg-foreground text-background border-background",
  }

  const _classes = `${colors[color]} ${paddingSizes[size]} ${textSizes[size]}`;

  return <button 
    disabled={disabled}
    className={`cursor-pointer w-full items-center justify-center rounded-lg border-1 border-solid disabled:cursor-auto disabled:opacity-75 ${_classes}`}
    type={type}
  >
    { children }
  </button>
}