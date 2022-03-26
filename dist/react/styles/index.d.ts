import { FlattenInterpolation, FlattenSimpleInterpolation } from "styled-components";
export declare const setMediaQuery: (cssProperties: FlattenSimpleInterpolation | FlattenInterpolation<any>, breakpoint?: BreakPoints) => FlattenInterpolation<import("styled-components").ThemeProps<any>>;
export declare enum BreakPoints {
    Mobile = 450,
    Tablet = 769,
    Desktop = 1328
}
export declare type Device = "mobile" | "tablet" | "desktop";
//# sourceMappingURL=index.d.ts.map