import { memo } from "react";

const ProgressItem = ({ progress }) => {
  return <li>{progress}</li>;
};

export default memo(ProgressItem);
