import { useEffect, useState } from "react";
import { IUser } from "../interface/user.interface";
import { SavedData } from "../interface/savedUsers.interface";
import UserService from "../services/UserService";


export function useGetUsers(nat: string, clickedFilter: boolean, currentPage: number, limit: number) {
  const [users, setUsers] = useState<IUser[]>([]);
  const [cachedUsers, setCachedUsers] = useState<SavedData>({});
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const getUsers = async () => {
    try {
      setLoading(true);

      const response = await UserService.getUsers({
        nat,
        limit,
        page: currentPage,
      });

      const data = response.data.results;
      setUsers(data);

      if (nat === "")
        setCachedUsers((prev) => ({ ...prev, [currentPage]: data }));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const hasCachedUsers = cachedUsers[currentPage]?.length > 0;
    if (nat === "" && hasCachedUsers) {
      setUsers(cachedUsers[currentPage]);
    }
    if (nat !== "" || (nat === "" && !hasCachedUsers)) {
      getUsers();
    }
  }, [currentPage, clickedFilter])

  return {
    users,
    error,
    loading
  }
}