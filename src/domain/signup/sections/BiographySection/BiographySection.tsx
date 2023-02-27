import { Stack } from "@mui/system";
import { SubmitButton } from "../../common/components/button/SubmitButton";
import {
  BioArticle,
  ConflictArticle,
  ResumeArticle,
  ProfileLinkArticle,
  SocialMediaLinkArticle,
} from "./articles";
import { useBioSection } from "./hooks/useBiographySection";

export const BiographySection = () => {
  const { state } = useBioSection();

  return (
    <Stack spacing="2.77vw">
      <BioArticle props={state.biography} />
      <ProfileLinkArticle props={state.link} />
      <SocialMediaLinkArticle props={state.hyperlink} />
      <ResumeArticle />
      <ConflictArticle props={state.compliance} />
      <SubmitButton onClick={state.submit.onSubmit} />
    </Stack>
  );
};
