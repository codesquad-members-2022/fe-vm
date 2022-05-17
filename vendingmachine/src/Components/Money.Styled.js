import styled from 'styled-components';
import {
  FlexCenter,
  MoneyUnitNumber,
  ButtonCommon,
} from 'styled-components/util';

export const MoneyItem = styled.li`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: ${({ theme }) => theme.margin.large};
`;

export const Unit = styled.button`
  ${ButtonCommon}
  ${MoneyUnitNumber}

  &:hover {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));
  }
`;

export const Number = styled(FlexCenter)`
  cursor: default;
  ${MoneyUnitNumber}
`;
