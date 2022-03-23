import React from "react";
import styled, { css } from "styled-components";
import { layout, color, LayoutProps } from "styled-system";
import { IAvatarProps, shape } from "./types";

const AvatarContainer = styled.div<LayoutProps & { shape?: shape }>`
  background-color: #333;
  ${layout}
  ${color}
  overflow: hidden;

  ${({ shape }) =>
    shape === "circle" &&
    css`
      border-radius: 50%;
    `}
`;

const AvatarImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const Avatar: React.FC<IAvatarProps> = ({
  children,
  size,
  shape = "square",
  src,
  alt,
}) => {
  return (
    <AvatarContainer width={size} height={size} shape={shape}>
      <AvatarImage src={src} alt={alt}>
        {children}
      </AvatarImage>
    </AvatarContainer>
  );
};

export default Avatar;
