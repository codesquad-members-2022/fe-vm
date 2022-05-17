import { useContext, useEffect, useRef } from "react";

import { ProcessContext } from "contexts/processContext";

import ProcessItem from "./ProcessItem/ProcessItem";
import Wrapper from "./ProgressArea.styled";

const createKey = (value, idx) => value + idx;

const ProgressArea = () => {
  const { process } = useContext(ProcessContext);

  const processEndRef = useRef();

  const scrollToBottom = () => {
    processEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, []);

  return (
    <Wrapper>
      {process.map((curProcess, idx) => (
        <ProcessItem process={curProcess} key={createKey(curProcess, idx)} />
      ))}
      <div ref={processEndRef} />
    </Wrapper>
  );
};

export default ProgressArea;
