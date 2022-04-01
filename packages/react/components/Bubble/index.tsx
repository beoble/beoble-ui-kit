import styled from "styled-components";
import { IBubbleProps } from "./type";

export const Bubble = styled.div<IBubbleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  background-color: #f2f2f3;
  width: fit-content;
  max-width: 180px;
  border-radius: 12px;
  font-size: 12px;
  margin-bottom: 12px;
`;
