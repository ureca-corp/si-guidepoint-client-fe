import { Stack } from "@mui/material";
import { ArticleTemplateProps } from "../../types/template.type";
import { Title } from "../Title";

export const ArticleTemplate = ({ title, children }: ArticleTemplateProps) => {
  return (
    <Stack width="100%" spacing="1.11vw">
      <Title title={title} />
      {children}
    </Stack>
  );
};
