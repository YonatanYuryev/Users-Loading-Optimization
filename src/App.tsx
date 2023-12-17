import { FC } from "react";
import "./styles/index.scss";
import Button from "./components/Button/Button";
import Dropdown from "./components/Dropdown/Dropdown";
import Container from "./components/Container/Container";
import Modal from "./components/Modal/Modal";

const App: FC = () => {
  return (
    <div className="app">
      <Container>
        <Modal />
      </Container>
    </div>
  );
};

export default App;
