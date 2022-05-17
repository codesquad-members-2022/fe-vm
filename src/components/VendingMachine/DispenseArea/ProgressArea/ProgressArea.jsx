import { useContext, useEffect, useRef } from "react";

import { ProgressContext } from "contexts/progressContext";

import { Wrapper, ProgressList } from "./ProgressArea.styled";
import ProgressItem from "./ProgressItem";

const createKey = (value, idx) => value + idx;

const ProgressArea = () => {
  const { progress } = useContext(ProgressContext);

  const progressEndRef = useRef();

  const scrollToBottom = () => {
    progressEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, []);

  return (
    <Wrapper>
      <ProgressList ref={progressEndRef}>
        {progress.map((curProgress, idx) => (
          <ProgressItem
            progress={curProgress}
            key={createKey(curProgress, idx)}
          />
        ))}
      </ProgressList>
    </Wrapper>
  );
};

export default ProgressArea;
