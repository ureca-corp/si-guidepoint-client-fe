import { useCustomMediaQuery } from "@/common/theme/screen";
import { Stack, Typography } from "@mui/material";
import { ArticleWithDescTemplateProps } from "../../types/template.type";
import { Title } from "../Title";

export const ArticleWithDescTemplate = ({
  title,
  desc,
  children,
}: ArticleWithDescTemplateProps) => {
  const { isMedium } = useCustomMediaQuery();
  return (
    <Stack width={"100%"} spacing={isMedium ? "20px" : "1.11vw"}>
      <Title title={title} />
      <Typography whiteSpace={"break-spaces"} variant="subtitle2">
        {desc}
      </Typography>
      {children}
    </Stack>
  );
};
