import { FC } from "react";
import styles from "./Dropdown.modules.scss";
import Caret from "./Caret";

type Props = {
  list: string[];
  onClickDropdownItem: (el: string) => void;
  isOpen: boolean;
  setOpen: () => void;
};

const Dropdown: FC<Props> = ({
  list,
  onClickDropdownItem,
  isOpen,
  setOpen,
}) => {
  return (
    <div className={styles.dropdown}>
      <div onClick={setOpen} className={styles.default}>
        <p>Nationality</p>
        <Caret isOpen={true} />
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
