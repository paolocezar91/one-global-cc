"use client";

import { deleteUser, listUsers } from "@/api/api";
import { useEffect, useState } from "react";
import { UserRow } from "./user-row";
import { User } from "@/api/interfaces";
import { Pagination } from "../shared/pagination";

function useUsersList(page: number) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [users, setUsers] = useState<User[]>([]);
  const [totalPages, setTotalPages] = useState<number | undefined>();

  useEffect(() => {
    listUsers(page)
      .then((response) => {
        setUsers(response.data.data);
        setTotalPages(response.data.total_pages);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [page]);

  return { loading, error, totalPages, users };
}

export function UserList() {
  const [page, setPage] = useState(1);
  const [deletedUsers, setDeletedUsers] = useState<number[]>([]);
  const { users, loading, error, totalPages = 0 } = useUsersList(page);
  const showError = !loading && error;
  const ready = !showError && !loading;
  const userList = users.filter((user) => !deletedUsers.includes(user.id));

  const handleDeleteUser = (id: number) => {
    const answer = confirm(
      `Are you sure you want to delete this user id: ${id}?`,
    );

    if (answer) {
      // alert("User deletion is not implemented yet.");
      deleteUser(id)
        .then(() => setDeletedUsers((users) => [...users, id]))
        .catch(() => alert(`Something went wrong!`))
    }
  }

  const gotoNextPage = () => setPage(page < Number(totalPages || 0) ? page + 1 : page);
  const gotoPrevPage = () => setPage(page > 1 ? page - 1 : page);

  if(showError)
    return error;

  return ready && <div className="flex flex-col">
    <div className="flex flex-col items-center justify-center p-4">
      { userList.map((user, key) => <UserRow key={key} user={user} deleteUser={handleDeleteUser} />) }
    </div>
    <Pagination
      currentPage={page}
      totalPages={totalPages}
      onNextClick={gotoNextPage}
      onPrevClick={gotoPrevPage}
    />
  </div>
}
