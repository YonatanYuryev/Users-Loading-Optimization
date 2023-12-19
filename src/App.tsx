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
  const [savedUsers, setSavedUsers] = useState<SavedData>({});
  const [nat, setNat] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [error, setError] = useState<string>("");
  const limit = 10;
  const [signal, setSignal] = useState<boolean>(false);
  const pages: number[] = [];

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
        setSavedUsers((prev) => ({ ...prev, [currentPage]: users }));
      }
    } catch (err) {
      setError(err.message);
      alert(error);
    }

    if (nat !== "") {
      setNat("");
    }
  };

  useEffect(() => {
    if (nat !== "" || (nat === "" && !signal)) {
      getUsers();
    } else {
      setUsers(savedUsers[currentPage]);
    }

  }, [currentPage]);

  const onClickDropdownItem = (el: string) => setNat(el);
  const onClickPage = (num: number) => setCurrentPage(num);

  const lastUserIdx: number = limit * currentPage;
  const firstUserIdx: number = lastUserIdx - limit;
  const currentPages: number[] = pages.slice(firstUserIdx, lastUserIdx);

  return (
    <div className="app">
      <Container>
        <Controls setNat={onClickDropdownItem} />
        <TableHead />
        <UsersList users={users} />
        <Pagination
          currentPages={currentPages}
          usersPerPage={limit}
          onClickPage={onClickPage}
        />
      </Container>
    </div>
  );
};

export default App;
