import { FC } from "react";
import styles from "./Modal.module.scss";

type Props = {
  name: string;
};

const Name: FC<Props> = ({ name }) => {
  return (
    <div className={styles.name}>
      <span className={styles.label}>Full name:</span>
      <span className={styles.value}>{name}</span>
    </div>
  );
};

export default Name;
