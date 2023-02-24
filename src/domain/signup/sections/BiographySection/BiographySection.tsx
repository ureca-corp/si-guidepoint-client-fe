import { css } from "@emotion/react";
import { Stack } from "@mui/system";
import { BioArticle, ConflictArticle, LinkArticle } from "./articles";

export const BiographySection = () => {
  return (
    <Stack>
      <BioArticle />
      <LinkArticle />
      <ConflictArticle />
    </Stack>
  );
};
