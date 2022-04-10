import { CSSProperties, HTMLProps } from "react";

export interface ICardProps extends HTMLProps<HTMLDivElement> {
  style?: CSSProperties;
  width?: number;
  height?: number;
  borderRadius?: number | string;
  backgroundColor?: string;
  boxShadow?: string;
  className?: string;
  onClose?: () => void;
}
