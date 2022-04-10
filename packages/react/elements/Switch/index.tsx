import React, { ChangeEvent, useState } from "react";
import styled, { css } from "styled-components";
import { color, ColorProps } from "styled-system";
import { Colors } from "../../styles";
import { SizeCss, SizeProps } from "../../styles/size";
import { ISWitchProps } from "./type";

const SwitchContainer = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const SwitchThumb = styled.div<ColorProps & SizeProps>`
  position: relative;
  ${color}
  ${SizeCss("height")}
  ${SizeCss("width", 2)}
  ${SizeCss("border-radius")}

  padding: 4px;
  transition: 300ms all;

  &::after {
    transition: 300ms all;
    content: "";
    position: absolute;
    ${SizeCss("width")}
    ${SizeCss("height")}
    border-radius: 50%;
    top: 50%;
    left: 4px;
    background: white;
    transform: translate(0, -50%);
  }
`;

const SwitchBackground = styled.input<ColorProps & SizeProps>`
  opacity: 0;
  position: absolute;

  &:checked + ${SwitchThumb} {
    ${color}
    &::after {
      transform: translate(${({ sizeOf }) => `${sizeOf}px`}, -50%);
    }
  }
`;

const Switch: React.FC<ISWitchProps> = ({
  size = 24,
  unCheckedBgColor = "#b3b3b3",
  checkedBgColor = Colors.ios.success,
}) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.checked);
    setChecked(e.target.checked);
  };

  return (
    <SwitchContainer>
      <SwitchBackground
        sizeOf={size}
        checked={checked}
        onChange={handleChange}
        type="checkbox"
        backgroundColor={checkedBgColor}
      />
      <SwitchThumb backgroundColor={unCheckedBgColor} sizeOf={size} />
    </SwitchContainer>
  );
};

export default Switch;
