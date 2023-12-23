import { FC } from "react";
import styles from "./TableHead.module.scss";

const TableHead: FC = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>Full name</li>
      <li className={styles.item}>Email address</li>
      <li className={styles.item}>Phone #</li>
      <li className={styles.item}>Gender</li>
      <li className={styles.item}>City</li>
      <li className={styles.item}>Date of birth</li>
      <li className={styles.item}>Nationality</li>
    </ul>
  );
};

export default TableHead;
