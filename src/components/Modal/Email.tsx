import { FC } from "react";
import styles from "./Modal.module.scss";

type Props = {
  email: string;
};

const Email: FC<Props> = ({ email }) => {
  return (
    <div className={styles.email}>
      <span className={styles.label}>Email:</span>
      <span className={styles.value}>{email}</span>
    </div>
  );
};

export default Email;
