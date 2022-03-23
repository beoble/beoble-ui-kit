import React from "react";
import styled from "styled-components";
import { IButtonProps } from "./type";

const ButtonContainer = styled.button`
  border: none;
  cursor: pointer;
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
