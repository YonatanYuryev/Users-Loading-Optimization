import { FC } from "react";
import styles from "./Modal.module.scss";

type Props = {};

const City: FC = (props: Props) => {
  return (
    <div className={styles.city}>
      <span className={styles.label}>City:</span>
      <span className={styles.value}>New York</span>
    </div>
  );
};

export default City;
