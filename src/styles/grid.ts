import { css } from 'styled-components';
import { mediaquery } from './mediaquery';

const grid = css`
  width: 100%;
  padding: 0 var(--outer-gap);
  position: relative;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(var(--columns, 12), 1fr);
  grid-column-gap: var(--inner-gap);
`;

const fullbleedgrid = css`
  width: 100%;
  position: relative;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns:
    [wrapper-start] calc(var(--outer-gap) - var(--inner-gap))
    [start] repeat(var(--columns, 12), 1fr) [end] calc(
      var(--outer-gap) - var(--inner-gap)
    )
    [wrapper-end];
  grid-column-gap: var(--inner-gap);
`;

const eightOneColumns = css`
  grid-column: 1 / -1;
  ${mediaquery.md(css`
    grid-column: 2 / -2;
  `)}
`;

export { grid, fullbleedgrid, eightOneColumns };
