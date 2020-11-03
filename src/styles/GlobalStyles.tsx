import { createGlobalStyle } from 'styled-components';
import reset from './reset';
import root from './root';

const GlobalStyles = createGlobalStyle`
  ${reset}
  ${root}
`;

export default GlobalStyles;
