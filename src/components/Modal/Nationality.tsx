import { FC } from "react";
import styles from "./Modal.module.scss";

type Props = {
  nationality: string;
};

const Nationality: FC<Props> = ({nationality}) => {
  return (
    <div className={styles.nationality}>
      <span className={styles.label}>Nationality:</span>
      <span className={styles.value}>{nationality}</span>
    </div>
  );
};

export default Nationality;
