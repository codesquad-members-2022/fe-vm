import Button from "components/form/Button/Button";
import styled from "styled-components";

import InsertMoneyArea from "./InsertMoneyArea/InsertMoneyArea";
import ProgressArea from "./ProgressArea/ProgressArea";

const DispenseArea = () => {
  return (
    <DispenseAreaWrap>
      <InsertMoneyArea value="0" />
      <Button
        data={{
          name: "반환",
        }}
        style={{
          size: { width: "100%", height: "3rem" },
          fontSize: "1.3rem",
          margin: "1rem 0",
          bgColor: "#ccc",
        }}
      />
      <ProgressArea />
    </DispenseAreaWrap>
  );
};

const DispenseAreaWrap = styled.div`
  height: 100%;
`;

export default DispenseArea;
