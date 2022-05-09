import styled from 'styled-components';
import React from 'react';
import { productText } from '../styled-components/util';

const Product = ({ info }) => {
  // const [active, setActive] = useState(false);
  return (
    <Container>
      <Btn>
        <Title as="h3">{info.name}</Title>
        <Price as="strong">{info.price}</Price>
      </Btn>
    </Container>
  );
};

const Container = styled.li`
  width: 20%;
  border: 0.3rem solid ${({ theme }) => theme.color.black};
  border-radius: 1rem;
  cursor: pointer;
`;

const Btn = styled.button`
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  padding: ${({ theme }) => theme.padding.medium};
  cursor: pointer;
`;

const Title = styled(productText)`
  color: ${({ theme }) => theme.color.grey1};
`;

const Price = styled(productText)``;

export default React.memo(Product);
