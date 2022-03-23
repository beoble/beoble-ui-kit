export interface IAvatarProps {
  size: number | string;
  shape?: shape;
  src?: string;
  alt?: string;
}

export type shape = "square" | "circle";
