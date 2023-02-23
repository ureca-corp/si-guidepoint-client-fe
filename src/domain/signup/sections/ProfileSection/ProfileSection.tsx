import { Stack } from "@mui/system";
import { ArticlesWrapper } from "../../common/components/template";
import {
  AddressArticle,
  AssistanceArticle,
  BillingArticle,
  ContactArticle,
  EmptyArticle,
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
        <BillingArticle />
      </ArticlesWrapper>
      <ArticlesWrapper>
        <PhysicalArticle />
        <EmptyArticle />
      </ArticlesWrapper>
    </Stack>
  );
};
