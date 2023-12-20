import { FC, useEffect, useState } from "react";
import "./styles/index.scss";
import Container from "./components/Container/Container";
import TableHead from "./components/TableHead/TableHead";
import Pagination from "./components/Pagination/Pagintaion";
import { IUser } from "./interface/user.interface";
import UserService from "./services/UserService";
import Controls from "./components/Controls/Controls";
import UsersList from "./components/Users/UsersList";

interface SavedData {
  [currentPage: number]: IUser[];
}

const App: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [cachedUsers, setCachedUsers] = useState<SavedData>({});
  const [nat, setNat] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [error, setError] = useState<string>("");
  const [clickFilters, setClickFilters] = useState<boolean>(false);
  const limit = 10;
  const totalUsers = 10000;

  const getUsers = async () => {
    try {
      const response = await UserService.getUsers({
        nat,
        limit,
        page: currentPage,
      });
      const data = response.data.results;
      setUsers(data);

      if (nat === "") {
        setCachedUsers((prev) => ({ ...prev, [currentPage]: data }));
      }
    } catch (err) {
      setError(err.message);
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
  }, [currentPage, clickFilters]); 

  const onClickDropdownItem = (el: string) => {
    el === "Clear" ? setNat("") : setNat(el);
  };
  const onClickPage = (num: number) => setCurrentPage(num);

  const onClickFilters = () => setClickFilters(!clickFilters);

  return (
    <div className="app">
      <Container>
        {error && <div>{error}</div>}
        <Controls setNat={onClickDropdownItem} nat={nat} onClickFilters={onClickFilters} />
        <TableHead />
        <UsersList users={users} />
        <Pagination
          totalUsers={totalUsers}
          currentPage={currentPage}
          onClickPage={onClickPage}
        />
      </Container>
    </div>
  );
};

export default App;
