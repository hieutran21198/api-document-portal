import { css, Global, ThemeProvider } from "@emotion/react";

export enum Breakpoint {
  SM = "sm",
  MD = "md",
  LG = "lg",
  XL = "xl",
}

export class AppTheme {
  preset = {
    background: "#161616",
    backgroundBtn: "#1a1a1a",
    backgroundInput: "#1a1a1a",
    colorBorder: "#646cff",
    color: "rgba(255, 255, 255, 0.87)",
    colorMuted: "#2f2f2f",
    primary: "#e2e1df",
    secondary: "#161616",
    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
  };

  gutter = 1;

  breakpoints: {
    [key in Breakpoint]: string;
  } = {
    [Breakpoint.SM]: "30em",
    [Breakpoint.MD]: "48em",
    [Breakpoint.LG]: "62em",
    [Breakpoint.XL]: "80em",
  };

  media = (b: Breakpoint) => {
    return `@media (min-width: ${this.breakpoints[b]})`;
  };

  spacing = (n?: number) => {
    if (typeof n === "undefined") {
      n = 1;
    }

    return `${n * this.gutter}em`;
  };

  constructor(v?: Partial<AppTheme>) {
    if (v) {
      Object.bind(this, v);
    }
  }
}

type AppThemeProps = {
  theme: AppTheme;
  children?: React.ReactNode;
};
export const AppThemeProvider = (props: AppThemeProps) => {
  return (
    <ThemeProvider theme={props.theme}>
      <Global
        styles={css`
          html {
            color: ${props.theme.preset.color};
            background: ${props.theme.preset.background};
          }
        `}
      />
      {props.children}
    </ThemeProvider>
  );
};
