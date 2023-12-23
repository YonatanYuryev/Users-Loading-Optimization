import { FC } from "react";
import styles from "./Modal.module.scss";

type Props = {
  gender: string;
};

const Gender: FC<Props> = ({ gender }) => {
  return (
    <div className={styles.gender}>
      <span className={styles.label}>Gender:</span>
      <span className={styles.value}>{gender}</span>
    </div>
  );
};

export default Gender;
