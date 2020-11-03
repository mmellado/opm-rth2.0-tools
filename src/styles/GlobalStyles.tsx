import { createGlobalStyle } from 'styled-components';
import reset from './reset';
import root from './root';

const GlobalStyles = createGlobalStyle`
  ${reset}
  ${root}

  body {
    font-family: 'Roboto', Helvetica, Arial, sans-serif;
    font-size:  16px;
  }
`;

export default GlobalStyles;
