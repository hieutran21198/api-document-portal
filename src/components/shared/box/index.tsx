import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Breakpoint } from "theme";

const S = {
  Box: styled.div<{ responsive?: boolean }>(
    ({ responsive, theme }) =>
      responsive &&
      css`
        margin-left: auto;
        margin-right: auto;
        width: 100%;
        ${theme.media(Breakpoint.LG)} {
          width: 60em;
        }
        ${theme.media(Breakpoint.XL)} {
          width: 72em;
        }
      `
  ),
};

export type BoxProps = {
  responsive?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export const Box = (props: BoxProps) => {
  return <S.Box {...props}></S.Box>;
};
