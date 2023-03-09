import LocalStorage from "@/common/LocalStorage/LocalStorage";
import { useCustomMediaQuery } from "@/common/theme/screen";
import { Stack } from "@mui/material";
import { BiographySection } from "../sections/BiographySection";
import { EmploymentSection } from "../sections/EmploymentSection";
import { ExpertiseSection } from "../sections/ExpertiseSection";
import { ProfileSection } from "../sections/ProfileSection";

export const SignupView = () => {
  const { isMedium } = useCustomMediaQuery();

  return (
    <Stack
      width="100%"
      paddingY={isMedium ? "40px" : "2.77vw"}
      spacing={isMedium ? "40px" : "2.77vw"}
    >
      <ProfileSection />
      <EmploymentSection />
      <ExpertiseSection />
      <BiographySection />
    </Stack>
  );
};
