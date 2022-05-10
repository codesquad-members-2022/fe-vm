import Button from "components/form/Button/Button";
import Input from "components/form/Input/Input";
import constants from "mockData/constants";
import styled from "styled-components";

const InsertMoneyArea = () => {
  const { CURRENCY } = constants;

  return (
    <Wrap>
      <div className="input-wrap">
        <Input
          type="number"
          value={0}
          style={{ size: { width: "80%", height: "2rem" }, fontSize: "2rem" }}
        />{" "}
        {CURRENCY}
      </div>
      <Button
        data={{ name: "투입" }}
        style={{
          size: { width: "25%", height: "3rem" },
          fontSize: "1.3rem",
          color: "#fff",
          bgColor: "#000",
          margin: "0",
        }}
      />
    </Wrap>
  );
};

const Wrap = styled.div`
  font-size: 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .input-wrap {
    width: 100%;
  }
`;

export default InsertMoneyArea;
