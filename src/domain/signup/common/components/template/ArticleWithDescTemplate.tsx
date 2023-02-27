import { Stack, Typography } from "@mui/material";
import { ArticleWithDescTemplateProps } from "../../types/template.type";
import { Title } from "../Title";

export const ArticleWithDescTemplate = ({
  title,
  desc,
  children,
}: ArticleWithDescTemplateProps) => {
  return (
    <Stack width={"100%"} spacing="1.11vw">
      <Title title={title} />
      <Typography whiteSpace={"break-spaces"}>{desc}</Typography>
      {children}
    </Stack>
  );
};
