import { UserList } from "@/components/user-list/user-list";
import Link from "next/link";

export default function Dashboard() {
  return <div className="flex flex-col">
    <div className="text-right">
      <Link href="/user/create" className="hover:underline">Create</Link>
    </div>
    <UserList />
  </div>;
}
