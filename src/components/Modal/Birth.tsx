import { FC } from "react";
import styles from "./Modal.module.scss";

type Props = {
  birth: string;
};

const Birth: FC<Props> = ({ birth }) => {
  return (
    <div className={styles.birth}>
      <span className={styles.label}>Birth:</span>
      <span className={styles.value}>{birth}</span>
    </div>
  );
};

export default Birth;
