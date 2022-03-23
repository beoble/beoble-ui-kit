import React from "react";
import styled from "styled-components";
import { LayoutProps, layout } from "styled-system";
import { ICardProps } from "./type";

const CardContainer = styled.div<LayoutProps>`
  ${layout}
`;

const Card: React.FC<ICardProps> = ({ children }) => {
  return <CardContainer>{children}</CardContainer>;
};

export default Card;
