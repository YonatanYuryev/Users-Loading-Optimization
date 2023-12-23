import { FC } from "react";
import styles from "./Modal.module.scss";

type Props = {
  url: string;
};

const Avatar: FC<Props> = ({ url }) => {
  return <img src={url} className={styles.avatar} alt="user" />;
};

export default Avatar;
