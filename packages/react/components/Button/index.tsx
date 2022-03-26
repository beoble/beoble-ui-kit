import React from "react";
import styled from "styled-components";
import { IButtonProps } from "./type";

const ButtonContainer = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
  color: inherit;
  font-size: inherit;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button: React.FC<IButtonProps & React.HTMLProps<HTMLButtonElement>> = ({
  children,
  style,
  className,
  onClick,
}) => {
  return (
    <ButtonContainer style={style} className={className} onClick={onClick}>
      {children}
    </ButtonContainer>
  );
};

export default Button;
