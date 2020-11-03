import { css, FlattenSimpleInterpolation } from 'styled-components';

export const breakpoints = {
  xs: 375,
  sm: 768,
  md: 1024,
  lg: 1330,
};

type Mediaquery = {
  xs: (styles: FlattenSimpleInterpolation) => FlattenSimpleInterpolation;
  sm: (styles: FlattenSimpleInterpolation) => FlattenSimpleInterpolation;
  md: (styled: FlattenSimpleInterpolation) => FlattenSimpleInterpolation;
  lg: (styles: FlattenSimpleInterpolation) => FlattenSimpleInterpolation;
};

const applyMediaQuery = (
  rules: FlattenSimpleInterpolation,
  breakpoint: string
): FlattenSimpleInterpolation => css`
  @media (min-width: ${breakpoints[breakpoint]}px) {
    ${rules}
  }
`;

export const mediaquery: Mediaquery = Object.keys(breakpoints).reduce(
  (acc, breakpoint) => ({
    ...acc,
    [breakpoint]: (
      rules: FlattenSimpleInterpolation
    ): FlattenSimpleInterpolation => applyMediaQuery(rules, breakpoint),
  }),
  {}
) as Mediaquery;
