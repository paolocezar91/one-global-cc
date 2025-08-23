interface ButtonInterface {
  className?: string;
  children: React.ReactNode;
  color?: string;
  size?: string;
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
  onClick?: () => void;
}

export default function Button({
  children,
  type,
  color = "background",
  size = "base",
  disabled,
  className = "",
  onClick
}: Readonly<ButtonInterface>) {
  const paddingSizes: Record<string, string> = {
    xs: "px-1 py-1",
    base: "px-2 py-2",
    lg: "px-3 py-3",
    xl: "px-4 py-4",
  };

  const textSizes: Record<string, string> = {
    xs: "text-xs",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
  };

  const colors: Record<string, string> = {
    background: "bg-background text-foreground hover:bg-foreground hover:text-background",
    foreground: "bg-foreground text-background hover:bg-background hover:text-foreground",
  };

  const _classes = `${colors[color]} ${paddingSizes[size]} ${textSizes[size]}`;

  return <button 
    disabled={disabled}
    className={`
      cursor-pointer
      items-center
      justify-center
      rounded-lg
      disabled:cursor-auto
      disabled:opacity-75
      ${_classes}
      ${className}
    `}
    type={type}
    onClick={onClick}
  >
    { children }
  </button>
}