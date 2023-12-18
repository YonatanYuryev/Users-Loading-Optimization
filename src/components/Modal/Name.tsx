import { FC } from "react";
import styles from "./Modal.module.scss";

type Props = {};

const Name: FC = () => {
  return (
    <div className={styles.name}>
      <span className={styles.label}>Full name:</span>
      <span className={styles.value}>Jennie</span>
    </div>
  );
};

export default Name;
