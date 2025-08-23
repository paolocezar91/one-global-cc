import { UserList } from "@/components/user-list/user-list";

export default function Dashboard() {
  return <div className="flex flex-col">
    <div className="text-right">
      <a href="/user/create" className="hover:underline">Create</a>
    </div>
    <UserList />
  </div>;
}
