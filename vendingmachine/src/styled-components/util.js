import styled from 'styled-components';

export const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProductText = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.medium};
  line-height: ${({ theme }) => theme.lineHeight.medium};
`;

export const Container = styled.main`
  margin-top: ${({ theme }) => theme.margin.large};
  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
`;

export const CalculatorText = styled.div`
  font-size: ${({ theme }) => theme.fontSize.display};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: ${({ theme }) => theme.lineHeight.large};
`;

export const CalculatorBorder = styled.div`
  border: solid ${({ theme }) => [theme.borderSize.medium, theme.color.black]};
  border-radius: 1rem;
`;

export const debounce = function () {
  let timer;

  return function (func, time) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func();
    }, time);
  };
};
