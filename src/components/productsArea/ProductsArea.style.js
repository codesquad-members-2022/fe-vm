import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  row-gap: 30px;
  column-gap: 15px;
  width: 55%;
  height: fit-content;
  padding: 40px 30px;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    max-height: ${({ selectalbeStatus }) => (selectalbeStatus ? 0 : '100%')};
    background: linear-gradient(to bottom left, #4facd3, #ffffff, #4facd3);
    opacity: 0.6;
    transition: all 0.2s ease-in;
  }
`;

export { Container };
