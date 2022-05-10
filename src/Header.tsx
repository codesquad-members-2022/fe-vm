import styled, { css } from 'styled-components';

interface TStyledView {
  activate: boolean;
}

const HeaderWrapper = styled.header`
  height: 50px;
  margin: 20px 0;
  text-align: center;
`;

const Button = styled.button<TStyledView>`
  width: 80px;
  height: 50px;
  background-color: ${(props: any) => {
    if (props.activate) {
      return css`
        ${({ theme }) => theme.colors.gray1}
      `;
    } else {
      return css`
        ${({ theme }) => theme.colors.white}
      `;
    }
  }};
  color: ${(props: any) => {
    if (props.activate) {
      return css`
        ${({ theme }) => theme.colors.white}
      `;
    } else {
      return css`
        ${({ theme }) => theme.colors.gray1}
      `;
    }
  }};
  border: none;
  outline: none;
  cursor: pointer;
`;

export default function Header(props: { texts: string[] }): JSX.Element {
  const [text1, text2] = props.texts;

  return (
    <>
      <HeaderWrapper>
        <Button activate={true}>{text1}</Button>
        <Button activate={false}>{text2}</Button>
      </HeaderWrapper>
    </>
  );
}
