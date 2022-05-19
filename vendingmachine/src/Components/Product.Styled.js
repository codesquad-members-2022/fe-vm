import styled, { css } from 'styled-components';
import {
  FlexCenter,
  ProductText,
  ButtonCommon,
  boxShadowBorderRadi,
} from 'styled-components/util';

export const ProductItem = styled.li`
  width: 20%;
  cursor: pointer;
`;

export const Btn = styled(FlexCenter)`
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: ${({ theme }) => theme.padding.medium};
  ${boxShadowBorderRadi}
  ${ButtonCommon}

  ${({ active }) =>
    active &&
    css`
      border: 0.2rem solid ${({ theme }) => theme.color.red};
    `}

  ${({ disable }) =>
    disable &&
    css`
      background: ${({ theme }) => theme.color.grey3};
    `}

  &:hover {
    background: ${({ disable }) =>
      !disable &&
      'linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))'};
  }
`;

export const ProductImg = styled.img`
  display: block;
  width: 5rem;
`;

export const Title = styled(ProductText)`
  margin-top: ${({ theme }) => theme.margin.medium};
  color: ${({ theme }) => theme.color.grey1};
`;

export const Price = styled(ProductText)``;
