import Link from "next/link";

interface NavLinkInterface { className?: string; children: React.ReactNode, color?: string, size?: string, href: string }

export default function NavLink({ children, color = 'background', size = 'md', href, className = "" }: Readonly<NavLinkInterface>) {
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
    background: "bg-background text-foreground border-foreground hover:bg-foreground hover:text-background hover:border-background",
    foreground: "bg-foreground text-background border-background hover:bg-background hover:text-foreground hover:border-foreground",
  }

  const _classes = `${colors[color]} ${paddingSizes[size]} ${textSizes[size]}`;

  return <Link
    href={href}
    className={`
      w-full
      items-center
      justify-center
      rounded-lg
      border-1
      border-solid
      ${_classes}
      ${className}`
    }
  >
    { children }
  </Link>
}