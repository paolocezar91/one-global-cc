import { User } from "@/api/interfaces";
import Image from "next/image";
import Link from "next/link";

interface UserRowInterface {
  user: User
  deleteUser: (id: number) => void
}

export function UserRow({ user, deleteUser }: Readonly<UserRowInterface>) {
  const fullName = `${user.first_name} ${user.last_name}`;

  return <div className="flex flex-row p-4 border-1 border-solid border-foreground mb-4 w-100">
    <Image
      className="mr-2"
      width={60}
      height={60}
      src={user.avatar}
      alt={fullName}
    />
    <div className="flex flex-col grow">
      <p className="text-foreground text-lg">{fullName}</p>
      <p className="text-foreground text-base">
        <Link className="underline" href={`mailto:${user.email}`}>{user.email}</Link>
      </p>
    </div>
    <div className="ml-4 flex flex-col text-right">
      <Link className="text-green-800 hover:underline" href={`user/${user.id}`}>Edit</Link>
      <button className="text-red-800 hover:underline cursor-pointer" onClick={() => deleteUser(user.id)}>Delete</button>
    </div>
  </div>
}