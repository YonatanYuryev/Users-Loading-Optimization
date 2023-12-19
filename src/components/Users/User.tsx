import { FC } from "react";
import styles from "./User.module.scss";
import { IUser } from "../../interface/user.interface";

type Props = {
  user: IUser;
  key: React.Key;
};

const User: FC<Props> = ({ user }) => {
  return (
    <div className={styles.user}>
      <img className={styles.avatar} src={user.picture.large} alt="user" />
      <div className={styles.name}>
        <p className={styles.text}>{user.name.first}</p>
      </div>
      <div className={styles.email}>
        <p className={styles.text}>{user.email}</p>
      </div>
      <div className={styles.phone}>
        <p className={styles.text}>{user.phone}</p>
      </div>
      <div className={styles.gender}>
        <p className={styles.text}>{user.gender}</p>
      </div>
      <div className={styles.city}>
        <p className={styles.text}>{user.location.city}</p>
      </div>
      <div className={styles.birth}>
        <p className={styles.text}>{user.dob.date}</p>
      </div>
      <div className={styles.nationality}>
        <p className={styles.text}>{user.nat}</p>
      </div>
    </div>
  );
};

export default User;
