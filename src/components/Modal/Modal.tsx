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
import { IUser } from "../../interface/user.interface";

type Props = {
  user: IUser;
  onCloseModal: () => void;
};

const Modal: FC<Props> = ({ user, onCloseModal }) => {
  return (
    <div className={styles.bg}>
      <div className={styles.modal}>
        <Close onCloseModal={onCloseModal} />
        <section className={styles.user}>
          <div className={styles.topSection}>
            <Avatar url={user.picture.large} />
            <Name name={user.name.first} />
          </div>

          <div className={styles.bottomSection}>
            <Email email={user.email} />
            <Phone phone={user.phone} />
            <Gender gender={user.gender} />
            <Nationality nationality={user.nat} />
            <City city={user.location.city} />
            <Birth birth={user.dob.date} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Modal;
