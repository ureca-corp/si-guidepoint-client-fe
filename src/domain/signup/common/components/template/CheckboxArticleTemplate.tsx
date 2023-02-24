import { Stack } from "@mui/material";
import { ArticleTemplateProps } from "../../types/template.type";
import { Title } from "../Title";

export const CheckboxArticleTemplate = ({
  title,
  children,
}: ArticleTemplateProps) => {
  return (
    <Stack width="100%" spacing="0.7vw">
      <Title title={title} />
      {children}
    </Stack>
  );
};
