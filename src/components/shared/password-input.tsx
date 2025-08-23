import { ChangeEvent } from "react";
import TextInput from "./text-input"

interface PasswordInputInterface {
  id: string;
  label: string;
  htmlFor: string;
  name: string;
  placeholder: string;
  className?: string;
  onChange?: (e: ChangeEvent) => void;
}

export default function PasswordInput({ id, label, htmlFor, name, placeholder, className = "", onChange }: Readonly<PasswordInputInterface>) {
  return <TextInput onChange={onChange} className={className} id={id} name={name} htmlFor={htmlFor} placeholder={placeholder} label={label} type="password" />; 
}