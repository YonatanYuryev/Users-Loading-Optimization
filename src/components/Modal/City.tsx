import { FC } from "react";
import styles from "./Modal.module.scss";

type Props = {
  city: string;
};

const City: FC<Props> = ({ city }) => {
  return (
    <div className={styles.city}>
      <span className={styles.label}>City:</span>
      <span className={styles.value}>{city}</span>
    </div>
  );
};

export default City;
