import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import COLORS from 'constants/colors';

const GlobalStyle = createGlobalStyle`
    ${reset}
    *{
        box-sizing: border-box;
    }
    button{
        border:none;
        background: none;
    }
    body{
        background-color: ${COLORS.MAIN_BG};
    }
`;

export default GlobalStyle;
