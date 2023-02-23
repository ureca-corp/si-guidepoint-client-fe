import { ReactNode } from "react";
import { css } from "@emotion/react";
import { Stack } from "@mui/material";
import { CustomAppbar } from "../CustomAppbar/CustomAppbar";

export interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Stack css={sx.root}>
      <CustomAppbar />

      <Stack css={sx.inner}>
        <main css={sx.main}>{children}</main>
      </Stack>
    </Stack>
  );
};

const sx = {
  root: css`
    width: 100%;
    max-width: 1240px;
    height: 100%;
    margin: 0 auto;
  `,
  main: css`
    width: 100%;
    height: 100%;
  `,
  inner: css`
    flex-direction: row;
    width: 100%;
    height: 100%;
    padding: 0 20px;
  `,
};
