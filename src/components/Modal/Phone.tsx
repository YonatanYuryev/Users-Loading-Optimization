import { FC } from "react";
import styles from "./Modal.module.scss";

type Props = {};

const Phone: FC = (props: Props) => {
  return (
    <div className={styles.phone}>
      <span className={styles.label}>Phone:</span>
      <span className={styles.value}>(272) 790-0888</span>
    </div>
  );
};

export default Phone;
