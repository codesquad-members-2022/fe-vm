import styled, { css } from 'styled-components';

const itemStyle = css`
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

const Title = styled.h1`
  font-size: ${({ theme: { fontSize } }) => fontSize.display};
  text-align: center;
`;

const SubTitle = styled.h1`
  font-size: ${({ theme: { fontSize } }) => fontSize.large};
  text-align: center;
  padding: 30px;
`;

export { itemStyle, Title, SubTitle };
