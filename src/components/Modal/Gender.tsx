import { FC } from "react";
import styles from "./Modal.module.scss";

type Props = {};

const Gender: FC = (props: Props) => {
  return (
    <div className={styles.gender}>
      <span className={styles.label}>Gender:</span>
      <span className={styles.value}>Male</span>
    </div>
  );
};

export default Gender;
