import { FC } from "react";

type Props = {
  message: string;
};

const Error: FC<Props> = ({ message }) => {
  return <div>{message}</div>;
};

export default Error;
