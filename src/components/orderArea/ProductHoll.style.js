import styled from 'styled-components';

const Container = styled.div`
  margin-top: 40px;
  height: 300px;
  background: linear-gradient(to bottom, #ddd, #aaa);
  text-align: center;
  overflow: hidden;
`;

const Product = styled.span`
  display: block;
  font-size: 180px;
  transform: ${({ visible }) => (visible ? 'translateY(40%)' : 'translateY(-150%)')};
  transition: transform 0.7s ease-in 0.3s;
`;

export { Container, Product };
