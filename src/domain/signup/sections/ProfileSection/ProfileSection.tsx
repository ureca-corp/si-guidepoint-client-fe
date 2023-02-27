import { Stack } from "@mui/system";
import { ArticlesWrapper } from "../../common/components/template";
import {
  AddressArticle,
  AssistanceArticle,
  ContactArticle,
  EmptyArticle,
  ParticipationArticle,
  PersonalArticle,
  PhysicalArticle,
} from "./articles";

export const ProfileSection = () => {
  return (
    <Stack width="100%" spacing="2.77vw">
      <ArticlesWrapper>
        <PersonalArticle />
        <AssistanceArticle />
      </ArticlesWrapper>
      <ArticlesWrapper>
        <ContactArticle />
        <ParticipationArticle />
      </ArticlesWrapper>
      <ArticlesWrapper>
        <PhysicalArticle />
        <EmptyArticle />
      </ArticlesWrapper>
    </Stack>
  );
};
