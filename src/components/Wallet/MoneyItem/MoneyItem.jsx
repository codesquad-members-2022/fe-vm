import Button from "components/form/Button/Button";
import styled from "styled-components";

const Count = ({ data }) => {
  return <p className="count">{data}</p>;
};

const MoneyItem = ({ cash, count }) => {
  return (
    <MoneyLi>
      <Button
        className="money"
        data={{ name: cash }}
        style={{
          size: { width: "4rem", height: "3rem" },
          fontSize: "1.3rem",
          margin: "0 1rem 0 0",
          bgColor: "green",
          color: "#fff",
        }}
      />
      <Count data={count} />
    </MoneyLi>
  );
};

const MoneyLi = styled.li`
  width: 100%;
  display: flex;

  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }

  .money {
    border-radius: 4rem;
  }

  .count {
    width: 4rem;
    font-size: 1.3rem;
    line-height: 3rem;
    text-align: center;
    border-bottom: 2px solid #000;
  }
`;

export default MoneyItem;
