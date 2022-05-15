export const parseMoneyFormat = (money) => {
  const commaMoney = money.toLocaleString('ko-KR');
  return `${commaMoney}원`;
};

export const composeProvider = (providers) =>
  providers.reduce((Prev, Curr) => (props) => (
    <Prev>
      <Curr>{props.children}</Curr>
    </Prev>
  ));
