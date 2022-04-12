import { CSSProperties, ReactNode } from "react";
export interface IChatProps extends IChatStyleProps {
    account?: string;
    contractAddress?: string;
    token?: string;
}
export interface IChatStyleProps {
    style?: CSSProperties;
    size?: number | string;
    backgroundColor?: string;
    color?: string;
    roomTitle?: ReactNode;
}
//# sourceMappingURL=type.d.ts.map