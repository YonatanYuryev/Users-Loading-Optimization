import { FC } from "react";
import styles from "./Modal.module.scss";

type Props = {};

const Nationality: FC = (props: Props) => {
  return (
    <div className={styles.nationality}>
      <span className={styles.label}>Nationality:</span>
      <span className={styles.value}>US</span>
    </div>
  );
};

export default Nationality;
