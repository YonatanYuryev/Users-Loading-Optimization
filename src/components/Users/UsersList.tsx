import { FC } from "react";
import { IUser } from "../../interface/user.interface";
import User from "./User";
import styles from "./User.module.scss";
import Loader from "../Loader/Loader";

type Props = {
  users: IUser[];
  isLoading: boolean;
  onClickUser: (idValue: string | number) => void;
};

const UsersList: FC<Props> = ({ users, isLoading, onClickUser }) => {
  return (
    <ul className={isLoading ? styles.loadingList : styles.list}>
      {isLoading && <Loader />}
      {users.map((user) => (
        <User
          key={user.location.coordinates.latitude}
          user={user}
          onClickUser={onClickUser}
        />
      ))}
    </ul>
  );
};

export default UsersList;
