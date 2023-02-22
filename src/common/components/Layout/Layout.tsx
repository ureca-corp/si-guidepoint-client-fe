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
      <Stack direction="row" width="100%" height="100%">
        <main css={sx.main}>{children}</main>
      </Stack>
    </Stack>
  );
};

const sx = {
  root: css`
    width: 100%;
    max-width: 1240px;
    padding: 0 20px;
    margin: 0 auto;
  `,
  main: css`
    width: 100%;
    height: 100%;
  `,
};
