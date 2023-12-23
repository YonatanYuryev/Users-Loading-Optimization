import { FC } from "react";
import styles from "./Modal.module.scss";

type Props = {
  onCloseModal: () => void;
};

const Close: FC<Props> = ({ onCloseModal }) => {
  return (
    <svg
      onClick={onCloseModal}
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="currentColor"
      className={styles.close}
      viewBox="0 0 16 16"
    >
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
    </svg>
  );
};

export default Close;
