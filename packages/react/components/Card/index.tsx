import React from "react";
import styled from "styled-components";
import {
  LayoutProps,
  layout,
  color,
  ShadowProps,
  BorderProps,
  shadow,
  border,
  ColorProps,
} from "styled-system";
import { ICardProps } from "./type";

const CardContainer = styled.div<
  LayoutProps & ColorProps & ShadowProps & BorderProps
>`
  ${layout}
  ${color}
  ${shadow}
  ${border}
`;

const Card: React.FC<ICardProps> = ({
  children,
  style,
  className,
  width,
  height,
  borderRadius = 24,
  backgroundColor = "#ffffff",
  boxShadow = "rgb(0 0 0 / 30%) 0px 12px 60px 5px",
  onClose,
  onClick,
}) => {
  return (
    <CardContainer
      className={className}
      style={style}
      width={width}
      height={height}
      borderRadius={borderRadius}
      backgroundColor={backgroundColor}
      boxShadow={boxShadow}
      onClick={onClick}
    >
      {children}
    </CardContainer>
  );
};

export default Card;
