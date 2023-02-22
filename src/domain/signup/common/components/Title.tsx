import { css } from "@emotion/react";
import { Typography } from "@mui/material";
type TitleType = {
  title: string;
};

export const Title = ({ title }: TitleType) => {
  return (
    <Typography color="blue" fontSize="1.6vw" fontWeight={700}>
      {title}
    </Typography>
  );
};
