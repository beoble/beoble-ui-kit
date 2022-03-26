import {
  css,
  FlattenInterpolation,
  FlattenSimpleInterpolation,
} from "styled-components";

export const setMediaQuery = (
  cssProperties: FlattenSimpleInterpolation | FlattenInterpolation<any>,
  breakpoint = BreakPoints.Mobile
) => css`
  @media screen and (min-width: ${breakpoint}px) {
    ${cssProperties}
  }
`;

export enum BreakPoints {
  Mobile = 450,
  Tablet = 769,
  Desktop = 1328,
}

export type Device = "mobile" | "tablet" | "desktop";
