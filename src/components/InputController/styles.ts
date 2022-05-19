import styled from 'styled-components';

export const InputControllerLayout = styled.div<{ dir: string; jc: string; ai: string }>`
  ${({ theme, dir, jc, ai }) => theme.mixin.flexbox(dir, jc, ai)};
  width: 99%;
`;

export const InputLayer = styled.div`
  ${({ theme }) => theme.mixin.flexbox()};
  font-size: ${({ theme }) => theme.fontSize.xl};
  height: 30px;
`;

export const InputFormLayout = styled.form`
  width: 100%;
`;

export const Input = styled.input.attrs({ type: 'number', placeholder: '0' })`
  font-size: ${({ theme }) => theme.fontSize.xl};
  width: 100%;
  height: 100%;
  text-align: right;
  padding: 0 5px;
  border-bottom: 1px solid ${({ theme }) => theme.color.black};

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;
`;

export const InputAmount = styled.div`
  font-size: ${({ theme }) => theme.fontSize.xl};
  width: 100%;
  text-align: right;
  padding: 4px;
  border: 1px solid ${({ theme }) => theme.color.black};
  cursor: pointer;
  transition: background-color 200ms;

  &:hover {
    background-color: ${({ theme }) => theme.color.darkBlack};
  }

  &:active {
    background-color: ${({ theme }) => theme.color.lightBlack};
  }
`;

export const ReturnButton = styled.button.attrs({ type: 'button' })`
  font-size: ${({ theme }) => theme.fontSize.xl};
  padding: 5px;
  border: 1px solid ${({ theme }) => theme.color.black};
  cursor: pointer;
  transition: background-color 200ms;

  &:hover {
    background-color: ${({ theme }) => theme.color.darkBlack};
  }

  &:active {
    background-color: ${({ theme }) => theme.color.lightBlack};
  }
`;
