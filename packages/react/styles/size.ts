import { css } from "styled-components";

export interface SizeProps {
  sizeOf: number;
}

export type SizeCssProps =
  | "height"
  | "min-height"
  | "max-height"
  | "width"
  | "min-width"
  | "max-width"
  | "border-radius";

export const SizeCss = (
  sizeCssProp: SizeCssProps,
  multiplyFactor = 1
) => css<SizeProps>`
  ${({ sizeOf }) => `${sizeCssProp}: ${sizeOf * multiplyFactor}px;`}
`;
