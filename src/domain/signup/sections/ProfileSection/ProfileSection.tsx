import { Stack } from "@mui/system";
import { useCustomMediaQuery } from "@/common/theme/screen";
import { ArticlesWrapper } from "../../common/components/template";
import {
  AssistanceArticle,
  ContactArticle,
  EmptyArticle,
  ParticipationArticle,
  PersonalArticle,
  PhysicalArticle,
} from "./articles";

export const ProfileSection = () => {
  const { isMedium } = useCustomMediaQuery();
  return (
    <Stack width="100%" spacing={isMedium ? "40px" : "2.77vw"}>
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
        {isMedium || <EmptyArticle />}
      </ArticlesWrapper>
    </Stack>
  );
};
