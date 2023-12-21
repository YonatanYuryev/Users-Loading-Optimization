import { FC, useEffect, useState } from "react";
import "./styles/index.scss";
import Container from "./components/Container/Container";
import TableHead from "./components/TableHead/TableHead";
import Pagination from "./components/Pagination/Pagintaion";
import { IUser } from "./interface/user.interface";
import UserService from "./services/UserService";
import Controls from "./components/Controls/Controls";
import UsersList from "./components/Users/UsersList";
import Error from "./components/Error/Error";
import Modal from "./components/Modal/Modal";

interface SavedData {
  [currentPage: number]: IUser[];
}

const App: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [cachedUsers, setCachedUsers] = useState<SavedData>({});
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [chosenUser, setChosenUser] = useState<IUser>(null);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [nat, setNat] = useState<string>("");
  const [clickFilter, setClickFilter] = useState<boolean>(false);
  const limit = 10;
  const totalUsers = 10000;

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
  }, [currentPage, clickFilter]);

  const onClickDropdownItem = (item: string) =>
    item === "Clear" ? setNat("") : setNat(item);

  const onClickPage = (num: number) => setCurrentPage(num);

  const onClickFilter = () => setClickFilter(!clickFilter);

  const onClickUser = (idValue: number | string) => {
    const user = users.find((user) => user.id.value === idValue);
    setChosenUser(user);
    setIsOpenModal(true);
  };

  const onCloseModal = () => setIsOpenModal(false);

  return (
    <div className="app">
      <Container>
        {error && <Error message={error} />}
        <Controls
          setNat={onClickDropdownItem}
          nat={nat}
          onClickFilter={onClickFilter}
        />
        <TableHead />
        <UsersList
          users={users}
          isLoading={loading}
          onClickUser={onClickUser}
        />
        <Pagination
          totalUsers={totalUsers}
          currentPage={currentPage}
          onClickPage={onClickPage}
        />
        {isOpenModal && <Modal onCloseModal={onCloseModal} user={chosenUser} />}
      </Container>
    </div>
  );
};

export default App;
