import { FC } from "react";
import styles from "./Modal.module.scss";

type Props = {};

const Avatar: FC = () => {
  return (
    <img
      src="https://randomuser.me/api/portraits/men/75.jpg"
      className={styles.avatar}
      alt="user"
    />
  );
};

export default Avatar;
