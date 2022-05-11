import styled from "styled-components";
import theme from "styles/theme";

const returnButtonStyle = {
  size: { width: "100%", height: "3rem" },
  fontStyle: theme.fontStyles.buttons.large,
  margin: `${theme.whitespace.default} 0`,
  bgColor: `${theme.colors.darkblue}`,
};

const DispenseAreaWrap = styled.div`
  height: 100%;
`;

export { returnButtonStyle, DispenseAreaWrap };
