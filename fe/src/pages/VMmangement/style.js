import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  gap: 36px;
`;

export const ChangesUnitsContainer = styled.ul`
  width: 20%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  > li {
    display: flex;
    gap: 12px;
  }
`;
