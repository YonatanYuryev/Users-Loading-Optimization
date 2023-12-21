import { FC } from "react";
import ContentLoader from "react-content-loader";

const Loader: FC = (props) => (
  <ContentLoader
    viewBox="0 0 400 160"
    height={360}
    width={700}
    backgroundColor="transparent"
    {...props}
  >
    <circle cx="150" cy="86" r="8" />
    <circle cx="194" cy="86" r="8" />
    <circle cx="238" cy="86" r="8" />
  </ContentLoader>
);

export default Loader;
