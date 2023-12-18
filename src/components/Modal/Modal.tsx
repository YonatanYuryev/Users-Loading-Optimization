import { FC } from "react";
import styles from "./Modal.module.scss";
import Close from "./Close";
import Name from "./Name";
import Avatar from "./Avatar";
import Email from "./Email";
import Phone from "./Phone";
import Gender from "./Gender";
import Nationality from "./Nationality";
import City from "./City";
import Birth from "./Birth";

type Props = {};

const Modal: FC = (props: Props) => {
  return (
    <div className={styles.bg}>
      <div className={styles.modal}>
        <Close />
        <section className={styles.user}>
          <div className={styles.topSection}>
            <Avatar />
            <Name />
          </div>

          <div className={styles.bottomSection}>
            <Email />
            <Phone />
            <Gender />
            <Nationality />
            <City />
            <Birth />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Modal;
