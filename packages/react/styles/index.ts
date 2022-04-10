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

export const Colors = {
  neutral: {
    0: "#FAFCFF",
    1: "#f8fafd",
    2: "#eff2f5",
    3: "#cfd6e4",
    4: "#a6b0c3",
    5: "#808a9d",
    6: "#58667e",
  },
  ios: {
    success: "#4fbe79",
    failure: "",
  },
};
