import { css } from "@emotion/react";
import { Stack } from "@mui/material";
import { ArticlesWrapper } from "../../common/components/template";
import { AddExpertiseArticle, KeywordExpertiseArticle } from "./articles";

export const ExpertiseSection = () => {
  return (
    <Stack width="100%" paddingY="2.77vw" spacing="2.77vw">
      <ArticlesWrapper>
        <AddExpertiseArticle />
        <KeywordExpertiseArticle />
      </ArticlesWrapper>
    </Stack>
  );
};
