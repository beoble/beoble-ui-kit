import { ReactNode } from "react";

export interface ISWitchProps {
  className?: string;
  checked?: boolean;
  checkedIcon?: ReactNode;
  color?: string;
  checkedBgColor?: string;
  unCheckedBgColor?: string;
  size?: number;
}
