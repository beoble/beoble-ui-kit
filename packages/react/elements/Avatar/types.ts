import { CSSProperties } from "react";

export interface IAvatarProps {
  size: number | string;
  shape?: shape;
  src?: string;
  alt?: string;
  style?: CSSProperties;
}

export type shape = "square" | "circle";
