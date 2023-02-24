import { Stack } from "@mui/system";
import { ArticlesWrapper } from "../../common/components/template";
import {
  AddressArticle,
  AssistanceArticle,
  ContactArticle,
  ParticipationArticle,
  PersonalArticle,
  PhysicalArticle,
} from "./articles";

export const ProfileSection = () => {
  return (
    <Stack width="100%" paddingY="2.77vw" spacing="2.77vw">
      <ArticlesWrapper>
        <PersonalArticle />
        <AssistanceArticle />
      </ArticlesWrapper>
      <ArticlesWrapper>
        <ContactArticle />
        <ParticipationArticle />
      </ArticlesWrapper>
      <ArticlesWrapper>
        <AddressArticle />
        <PhysicalArticle />
      </ArticlesWrapper>
    </Stack>
  );
};
