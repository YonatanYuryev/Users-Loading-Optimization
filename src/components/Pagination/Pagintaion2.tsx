import { FC, useEffect, useState } from "react";
import styles from "./Pagination.module.scss";
import { IUser } from "../../interface/user.interface";
import UserService from "../../services/UserService";

type Props = {};

const Pagintaion2: FC = (props: Props) => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [savedUsers, setSavedUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const usersPerPage = 10;
  const [error, setError] = useState<string>("");

  async function getUsers() {
    try {
      const response = await UserService.getUsers();
      const data = response.data;
      setUsers(data);
    } catch (err) {
      setError(err.message);
      alert(error);
    }
  }

  useEffect(() => {
    // getUsers();
  }, [currentPage]);

  const lastUserIdx: number = usersPerPage * currentPage;
  const firstUserIdx: number = lastUserIdx - usersPerPage;
  const currentUsers = users.slice(firstUserIdx, lastUserIdx);

  let pages = [];

  for (let i = 1; i <= Math.ceil(currentUsers.length / usersPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className={styles.pagination}>
      <ul className={styles["pagination__list"]}>
        {currentUsers.map((el, idx) => (
          <li key={idx}>{el}</li>
        ))}
      </ul>
    </div>
  );
};

export default Pagintaion2;
