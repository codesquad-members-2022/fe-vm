import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  background: #fff;
  border-radius: 3px;
  font-size: 24px;
  line-height: 2;
  overflow: hidden;
`;

const MoneyInput = styled.input`
  display: block;
  width: calc(100% - 30px);
  padding-left: 15px;
  text-align: right;
`;

const Unit = styled.span`
  display: block;
  padding: 0 15px 0 10px;
  text-align: center;
`;

export { Container, MoneyInput, Unit };
