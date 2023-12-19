import { FC } from "react";
import { IUser } from "../../interface/user.interface";
import User from "./User";
import styles from "./User.module.scss";

type Props = {
  users: IUser[];
};

const UsersList: FC<Props> = ({ users }) => {
  return (
    <ul className={styles.list}>
      {users.map((user) => (
        <User key={user.location.coordinates.latitude} user={user} />
      ))}
    </ul>
  );
};

export default UsersList;
