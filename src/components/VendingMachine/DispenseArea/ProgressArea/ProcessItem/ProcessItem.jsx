import { memo } from "react";

const ProcessItem = ({ process }) => {
  return <li>{process}</li>;
};

export default memo(ProcessItem);
