import { css } from "@emotion/react";
import { Stack } from "@mui/system";
import {
  BioArticle,
  ConflictArticle,
  ResumeArticle,
  ProfileLinkArticle,
  SocialMediaLinkArticle,
} from "./articles";

export const BiographySection = () => {
  return (
    <Stack spacing="2.77vw">
      <BioArticle />
      <ProfileLinkArticle />
      <SocialMediaLinkArticle />
      <ResumeArticle />
      <ConflictArticle />
    </Stack>
  );
};
