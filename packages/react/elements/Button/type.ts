import { CSSProperties } from "react";

export interface IButtonProps {
  style?: CSSProperties;
  className?: string;
  color?: string;
  backgroundColor?: string;
  width?: number | string;
  height?: number | string;
  padding?: number | string;
  borderRadius?: number | string;
  onClick?: () => void;
}
