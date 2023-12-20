import { FC, useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Button from "../Button/Button";
import styles from "./Controls.module.scss";

type Props = {
  setNat: (el: string) => void;
  nat: string;
  onClickFilters: () => void;
};

const Controls: FC<Props> = ({ setNat, nat, onClickFilters }) => {
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);
  const nations: string[] = [
    "Clear",
    "AU",
    "BR",
    "CA",
    "CH",
    "DE",
    "DK",
    "ES",
    "FI",
    "FR",
    "GB",
    "IE",
    "IN",
    "IR",
    "MX",
    "NL",
    "NO",
    "NZ",
    "RS",
    "TR",
    "UA",
    "US",
  ];

  const onClickDropdown = () => setOpenDropdown(!openDropdown);

  return (
    <div className={styles.controls}>
      <Dropdown
        nat={nat}
        list={nations}
        onClickDropdownItem={setNat}
        isOpen={openDropdown}
        setOpen={onClickDropdown}
      />
      <Button onClick={onClickFilters}>Filters</Button>
    </div>
  );
};

export default Controls;
