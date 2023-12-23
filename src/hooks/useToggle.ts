import { useState } from "react";

export function useToggle(initialValue: boolean) {
  const [toggle, setToggle] = useState<boolean>(initialValue);

  const onClickToggle = () => setToggle(!toggle);

  return {
    toggle,
    onClickToggle
  }
}