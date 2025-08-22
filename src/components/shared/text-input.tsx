import { ChangeEvent } from "react"

interface TextInputInterface {
  id: string,
  label: string,
  htmlFor: string,
  type: string,
  name: string,
  placeholder: string,
  className?: string,
  onChange?: (e: ChangeEvent) => void
}

export default function TextInput({ id, label, htmlFor, type, name, placeholder, className = "", onChange }: Readonly<TextInputInterface>) {
  return <>
    <label className={`text-foreground ${className}`} htmlFor={htmlFor}>{label}</label>
    <input
      onChange={onChange}
      className="
        mr-2
        mb-2
        h-full
        w-full
        min-h-[44px]
        rounded-lg
        border
        bg-background
        text-foreground
        border-zinc-800
        px-4
        py-3
        text-sm
        placeholder:text-zinc-400
        focus:outline-0
      "
      id={id}
      type={type}
      name={name}
      placeholder={placeholder}
    />
  </>
}