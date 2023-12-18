import { FC } from "react";
import styles from "./Modal.module.scss";

type Props = {};

const Email: FC = (props: Props) => {
  return (
    <div className={styles.email}>
      <span className={styles.label}>Email:</span>
      <span className={styles.value}>jennie.nichols@example.com</span>
    </div>
  );
};

export default Email;
