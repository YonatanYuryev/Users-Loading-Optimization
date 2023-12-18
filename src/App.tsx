import { FC } from "react";
import "./styles/index.scss";
import Button from "./components/Button/Button";
import Dropdown from "./components/Dropdown/Dropdown";
import Container from "./components/Container/Container";
import Modal from "./components/Modal/Modal";
import User from "./components/User/User";
import TableHead from "./components/TableHead/TableHead";
import Pagination2 from "./components/Pagination/Pagintaion2";

const App: FC = () => {
  return (
    <div className="app">
      <Container>
        <TableHead />
        <User />
        <Pagination2 />
      </Container>
    </div>
  );
};

export default App;
