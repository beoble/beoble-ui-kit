import React from "react";
import styled from "styled-components";
import { color, ColorProps, padding, PaddingProps } from "styled-system";
import { Colors } from "../../styles";
import { IButtonProps } from "./type";

const ButtonContainer = styled.button<ColorProps & PaddingProps>`
  border: none;
  cursor: pointer;
  font-size: 16px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.neutral[4]};
  padding: 12px;
  border-radius: 8px;
  ${color}
  ${padding}
`;

const Button: React.FC<IButtonProps> = ({
  children,
  style,
  className,
  onClick,
  color,
  backgroundColor,
  padding,
}) => {
  return (
    <ButtonContainer
      style={style}
      className={className}
      onClick={onClick}
      color={color}
      backgroundColor={backgroundColor}
      padding={padding}
    >
      {children}
    </ButtonContainer>
  );
};

export default Button;
