import styled from "styled-components";
import { useContext } from "react";
import { CorrectCoinContext, InsertCoinContext, SetInsertCoinContext, AddHistoryContext } from "context";
import { useEffect } from "react";
import { useTimer } from "hooks";

const StyledInsertCoin = styled.input`
  width: 100%;
  height: 70px;
  background-color: #f2f2f2;
  border: none;
  border-radius: 10px;
  margin: 0px 10px 10px 0px;
  text-align: center;
  font-size: 1.5em;

  &:focus {
    outline: none;
  }
`;

const TotalInsertCoin = styled.p`
  color: #f2f2f2;
  border: 2px solid;
  border-radius: 10px;
  padding: 20px;
`;

function InsertCoin() {
  const correctCoin = useContext(CorrectCoinContext);
  const insertCoin = useContext(InsertCoinContext);
  const setInsertCoin = useContext(SetInsertCoinContext);
  const addHistory = useContext(AddHistoryContext);
  const { setDebounce } = useTimer();

  const handleInsertCoinBlur = ({ target }) => {
    const inputCoin = Number(target.value);
    target.value = "";

    if (!inputCoin) return;
    const correctedCoin = correctCoin(inputCoin);
    setInsertCoin((prevInsertCoin) => prevInsertCoin + correctedCoin);
    addHistory("INSERT_COIN", {
      coin: correctedCoin,
    });
  };

  useEffect(() => {
    if (!insertCoin) return;
    const delaySelectTime = 5000;

    const autoReturn = () => {
      setInsertCoin(0);
      addHistory("RETURN_COIN", { change: insertCoin });
    };

    setDebounce(autoReturn, delaySelectTime);
  }, [setInsertCoin, addHistory, insertCoin]);

  return (
    <>
      <StyledInsertCoin type="number" min="0" placeholder="INSERT COIN" onBlur={handleInsertCoinBlur} />
      <TotalInsertCoin>{insertCoin}</TotalInsertCoin>
    </>
  );
}

export { InsertCoin };
