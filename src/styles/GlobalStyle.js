import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset};

html {
  font-family: 'Bungee', sans-serif;
}

::-webkit-scrollbar {
  width: 15px;
}
::-webkit-scrollbar-track {
  background-color: ${({ theme: { greyScale } }) => greyScale.primaryGrey};
}

::-webkit-scrollbar-thumb {
  background-color: ${({ theme: { greyScale } }) => greyScale.white};
  border-radius: 30px;
}

::-webkit-scrollbar-thumb:hover {
  background-color: ${({ theme: { color } }) => color.yellow};
}

body {
  background-color: ${({ theme: { greyScale } }) => greyScale.background};
}

button,
input,
select,
textarea {
  background-color: transparent;
  border: 0;

  &:focus {
    outline: none;
    box-shadow: none;
  }
}

a,
button {
  cursor: pointer;
}
`;

export default GlobalStyle;
