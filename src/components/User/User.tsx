import { FC } from "react";
import styles from "./User.module.scss";

type Props = {};

const User: FC = (props: Props) => {
  return (
    <div className={styles.user}>
      <img
        className={styles.avatar}
        src="https://randomuser.me/api/portraits/men/75.jpg"
        alt="user"
      />
      <div className={styles.name}>
        <p className={styles.text}>Jenny</p>
      </div>
      <div className={styles.email}>
        <p className={styles.text}>example@gmail.com</p>
      </div>
      <div className={styles.phone}>
        <p className={styles.text}>(272) 790-0888</p>
      </div>
      <div className={styles.gender}>
        <p className={styles.text}>Male</p>
      </div>
      <div className={styles.city}>
        <p className={styles.text}>New York</p>
      </div>
      <div className={styles.birth}>
        <p className={styles.text}>14/04/1984</p>
      </div>
      <div className={styles.nationality}>
        <p className={styles.text}>US</p>
      </div>
    </div>
  );
};

export default User;
