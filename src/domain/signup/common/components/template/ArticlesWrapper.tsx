import { css } from "@emotion/react";
import { Stack } from "@mui/material";
import { ReactNode } from "react";

type ArticlesWrapperProps = {
  children: ReactNode;
};

export const ArticlesWrapper = ({ children }: ArticlesWrapperProps) => {
  return (
    <Stack width="100%" direction={"row"} spacing="2.77vw">
      {children}
    </Stack>
  );
};
