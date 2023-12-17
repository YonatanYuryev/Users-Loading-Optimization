import { FC } from "react";
import styles from "./Dropdown.modules.scss";
import Caret from "./Caret";

type Props = {
  list: string[];
};

const Dropdown: FC<Props> = ({ list }) => {
  return (
    <div className={styles.dropdown}>
      <div className={styles.default}>
        <p>Nationality</p>
        <Caret isOpen={true} />
      </div>
      <ul className={styles.list}>
        {list.map((el) => (
          <li key={el} className={styles.item}>
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
