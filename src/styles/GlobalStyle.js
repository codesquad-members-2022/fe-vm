import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Bungee&display=swap');

${reset};

* {
  font-family: 'Bungee', cursive;
}

html {
  font-family: 'Bungee', cursive;
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
