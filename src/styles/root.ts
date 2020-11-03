import { css } from 'styled-components';
import { mediaquery } from './mediaquery';

const root = css`
  :root {
    -webkit-font-smoothing: antialiased;
    --columns: 4;
    --outer-gap: 24px;
    --inner-gap: 24px;
    --col-width: calc(
      (
          100vw - (var(--outer-gap) * 2) -
            (var(--inner-gap) * (var(--columns) - 1))
        ) / var(--columns)
    );
    --col: calc(var(--col-width) + var(--inner-gap));
  }
  ${mediaquery.sm(css`
    :root {
      --columns: 16;
      --outer-gap: 32px;
      --inner-gap: 24px;
    }
  `)};
`;

export default root;
