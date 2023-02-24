import { Stack } from "@mui/material";
import { BiographySection } from "../sections/BiographySection";
import { EmploymentSection } from "../sections/EmploymentSection";
import { ExpertiseSection } from "../sections/ExpertiseSection";
import { ProfileSection } from "../sections/ProfileSection";

export const SignupView = () => {
  return (
    <Stack width="100%">
      <ProfileSection />
      <EmploymentSection />
      <ExpertiseSection />
      <BiographySection />
    </Stack>
  );
};
