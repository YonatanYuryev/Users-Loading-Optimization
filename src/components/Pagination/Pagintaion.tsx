import { FC } from "react";
import styles from "./Pagination.module.scss";

type Props = {
  currentPages: number[];
  usersPerPage: number;
  onClickPage: (page: number) => void;
};

const Pagintaion: FC<Props> = ({ currentPages, usersPerPage, onClickPage }) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(currentPages.length / usersPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className={styles.pagination}>
      <ul className={styles["pagination__list"]}>
        {pages.map((el) => (
          <li onClick={() => onClickPage(el)} key={el} className={styles["pagination__item"]}>
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagintaion;
