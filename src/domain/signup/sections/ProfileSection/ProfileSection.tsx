import { Stack } from "@mui/system";
import {
  AddressArticle,
  AssistanceArticle,
  BillingArticle,
  ContactArticle,
  ParticipationArticle,
  PersonalArticle,
} from "./articles";

export const ProfileSection = () => {
  return (
    <Stack width="100%">
      <Stack width="100%" direction={"row"} spacing="2.77vw">
        <PersonalArticle />
        <AssistanceArticle />
      </Stack>
      <Stack direction={"row"}>
        <ContactArticle />
        <ParticipationArticle />
      </Stack>
      <Stack direction={"row"}>
        <AddressArticle />
        <BillingArticle />
      </Stack>
    </Stack>
  );
};
