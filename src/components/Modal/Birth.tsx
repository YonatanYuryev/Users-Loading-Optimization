import { FC } from "react";
import styles from "./Modal.module.scss";

type Props = {};

const Birth: FC = (props: Props) => {
  return (
    <div className={styles.birth}>
      <span className={styles.label}>Birth:</span>
      <span className={styles.value}>1992-03-08T15:13:16.688Z</span>
    </div>
  );
};

export default Birth;
