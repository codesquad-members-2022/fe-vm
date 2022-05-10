import Button from "components/form/Button/Button";
import Input from "components/form/Input/Input";
import constants from "mockData/constants";

const InsertMoneyArea = () => {
  const { CURRENCY } = constants;

  return (
    <>
      <Input type="number" value={0} /> {CURRENCY}
      <Button
        data={{ name: "투입" }}
        style={{
          size: { width: "4rem", height: "3rem" },
          fontSize: "1.3rem",
          color: "#fff",
          bgColor: "#000",
        }}
      />
    </>
  );
};

export default InsertMoneyArea;
