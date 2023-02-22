import { css } from "@emotion/react";
import { Typography, TypographyProps } from "@mui/material";

export const BasicLabel = (p: TypographyProps) => (
  <Typography css={sx.title} {...p} />
);
const sx = {
  title: css`
    width: 12vw;
    text-align: right;
  `,
};
