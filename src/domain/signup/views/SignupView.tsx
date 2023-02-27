import { Stack } from "@mui/material";
import { BiographySection } from "../sections/BiographySection";
import { EmploymentSection } from "../sections/EmploymentSection";
import { ExpertiseSection } from "../sections/ExpertiseSection";
import { ProfileSection } from "../sections/ProfileSection";

export const SignupView = () => {
  return (
    <Stack width="100%" paddingY="2.77vw" spacing="2.77vw">
      <ProfileSection />
      <EmploymentSection />
      <ExpertiseSection />
      <BiographySection />
    </Stack>
  );
};
