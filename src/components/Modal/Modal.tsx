import { FC } from "react";
import styles from "./Modal.module.scss";
import Close from "./Close";

type Props = {};

const Modal: FC = (props: Props) => {
  return (
    <div className={styles.bg}>
      <div className={styles.modal}>
        <Close />
        <section className={styles.user}>
          <div className={styles.topSection}>
            <img
              src="https://randomuser.me/api/portraits/men/75.jpg"
              className={styles.avatar}
              alt="user"
            />
            <div className={styles.name}>New York</div>
          </div>

          <div className={styles.bottomSection}>
            <div className={styles.email}></div>
            <div className={styles.phone}></div>
            <div className={styles.gender}></div>
            <div className={styles.nationality}></div>
            <div className={styles.birth}></div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Modal;
