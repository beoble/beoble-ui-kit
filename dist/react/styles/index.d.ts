import { FlattenInterpolation, FlattenSimpleInterpolation } from "styled-components";
export declare const setMediaQuery: (cssProperties: FlattenSimpleInterpolation | FlattenInterpolation<any>, breakpoint?: BreakPoints) => FlattenInterpolation<import("styled-components").ThemeProps<any>>;
export declare enum BreakPoints {
    Mobile = 450,
    Tablet = 769,
    Desktop = 1328
}
export declare type Device = "mobile" | "tablet" | "desktop";
export declare const Colors: {
    neutral: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
    };
    ios: {
        success: string;
        failure: string;
    };
};
//# sourceMappingURL=index.d.ts.map