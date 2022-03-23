import styled, { css } from "styled-components";

export interface size {
  width: string | number;
  height: string | number;
}

export const Size = css<size>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;
