import { FC, useState } from "react";
import "./styles/index.scss";
import Container from "./components/Container/Container";
import TableHead from "./components/TableHead/TableHead";
import Pagination from "./components/Pagination/Pagintaion";
import { IUser } from "./interface/user.interface";
import Controls from "./components/Controls/Controls";
import UsersList from "./components/Users/UsersList";
import Error from "./components/Error/Error";
import Modal from "./components/Modal/Modal";
import { useGetUsers } from "./hooks/useGetUsers";
import { useToggle } from "./hooks/useToggle";
import { useModal } from "./hooks/useModal";

const App: FC = () => {
  const [chosenUser, setChosenUser] = useState<IUser>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [nat, setNat] = useState<string>("");
  const limit = 10;
  const totalUsers = 10000;

  const filter = useToggle(false);
  const modal = useModal();
  const { users, error, loading } = useGetUsers(
    nat,
    filter.toggle,
    currentPage,
    limit
  );

  const onClickDropdownItem = (item: string) =>
    item === "Clear" ? setNat("") : setNat(item);

  const onClickPage = (num: number) => setCurrentPage(num);

  const onClickFilter = () => filter.onClickToggle();

  const onClickUser = (idValue: number | string) => {
    const user = users.find((user) => user.id.value === idValue);
    setChosenUser(user);
    modal.toggleModal();
  };

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
        {modal.modalOpen && (
          <Modal onCloseModal={modal.toggleModal} user={chosenUser} />
        )}
      </Container>
    </div>
  );
};

export default App;
