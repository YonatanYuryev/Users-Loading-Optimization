import { FC } from "react";
import styles from "./Pagination.module.scss";

type Props = {
  totalUsers: number;
  currentPage: number;
  onClickPage: (page: number) => void;
};

const Pagintaion: FC<Props> = ({ totalUsers, currentPage, onClickPage }) => {
  let pages = [];

  const maxButtonsToShow = 10;
  const startPage = Math.max(currentPage - 5, 1);
  const endPage = Math.min(startPage + maxButtonsToShow - 1, totalUsers);

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <div className={styles.pagination}>
      <ul className={styles["pagination__list"]}>
        {pages.map((el) => (
          <li
            onClick={() => onClickPage(el)}
            key={el}
            className={
              currentPage === el
                ? styles["pagination__item_active"]
                : styles["pagination__item"]
            }
          >
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagintaion;
