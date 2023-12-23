import { FC } from "react";
import styles from "./Modal.module.scss";

type Props = {
  phone: string | number;
};

const Phone: FC<Props> = ({ phone }) => {
  return (
    <div className={styles.phone}>
      <span className={styles.label}>Phone:</span>
      <span className={styles.value}>{phone}</span>
    </div>
  );
};

export default Phone;
