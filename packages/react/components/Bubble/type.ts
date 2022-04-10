export interface IBubbleProps extends IBubbleStyleProps {
  time?: string | number;
}

export type side = "top" | "bottom" | "left" | "right";

export interface IBubbleStyleProps {
  backgroundColor?: string;
  color?: string;
  padding?: string | number;
  borderRadius?: string | number;
}

export interface IMessage {
  message: string;
  time: number;
  sender: IAccount;
}

export interface IAccount {
  account: string;
  profile: string;
  nickname: string;
}
