import { useContext, useEffect, useRef } from "react";

import { ProgressContext } from "contexts/progressContext";
import createKey from "utils/createKey";

import { Wrapper, ProgressList } from "./ProgressArea.styled";
import ProgressItem from "./ProgressItem";

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
        {progress.map((current, idx) => (
          <ProgressItem progress={current} key={createKey(current, idx)} />
        ))}
      </ProgressList>
    </Wrapper>
  );
};

export default ProgressArea;
