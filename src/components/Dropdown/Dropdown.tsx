import { FC } from "react";
import styles from "./Dropdown.modules.scss";
import Caret from "./Caret";

type Props = {
  list: string[];
  onClickDropdownItem: (el: string) => void;
  isOpen: boolean;
  setOpen: () => void;
  nat: string;
};

const Dropdown: FC<Props> = ({
  list,
  onClickDropdownItem,
  isOpen,
  setOpen,
  nat,
}) => {
  return (
    <div className={styles.dropdown}>
      <div onClick={setOpen} className={styles.default}>
        {nat === "" ? <p>Nationality</p> : <p>{nat}</p>}
        <Caret isOpen={isOpen} />
      </div>
      {isOpen && (
        <ul className={styles.list}>
          {list.map((el) => (
            <li
              onClick={() => onClickDropdownItem(el)}
              key={el}
              className={styles.item}
            >
              {el}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
