import { Stack, Typography } from "@mui/material";
import { ArticleWithDescTemplateProps } from "../../types/template.type";
import { Title } from "../Title";

export const ArticleWithDescTemplate = ({
  title,
  desc,
  children,
}: ArticleWithDescTemplateProps) => {
  return (
    <Stack width={"100%"}>
      <Title title={title} />
      <Typography>{desc}</Typography>
      {children}
    </Stack>
  );
};
