import styled from 'styled-components';

const Container = styled.div`
  width: 45%;
  padding: 20px;
  border-left: 2px solid #333;
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin: 30px 0;
`;

const ReturnBtn = styled.button`
  width: 65px;
  line-height: 65px;
  border-radius: 50%;
  background: #e42b2b;
  color: #fff;
`;

export { Container, BtnWrap, ReturnBtn };
