import { useState } from 'react';
import { CashInput, Button, ChargeForm } from './ChargeForm.styled';

export default function ChargeScreen() {
  const [cash, setCash] = useState(0);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(cash);
    // cash 사용
  };

  const handleKeyUpInput = (evt) => {
    const { value } = evt.target;
    setCash(value);
  };

  return (
    <ChargeForm flex onSubmit={handleSubmit}>
      <CashInput
        type="text"
        placeholder="금액을 입력하세요"
        flex
        justify="center"
        align="center"
        onKeyUp={handleKeyUpInput}
        autoFocus
      ></CashInput>
      <Button type="submit" flex justify="center" align="center">
        클릭
      </Button>
    </ChargeForm>
  );
}
