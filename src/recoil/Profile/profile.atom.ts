import { selector } from "recoil";
import { ContactInfoAtom } from "./contact.atom";
import { PersonalInfoAtom } from "./personal.atom";
import { AssistantInfoAtom } from "./assistant.atom";
import { EmploymentInfoAtom } from "./employment.atom";
import { ExpertisementInfoAtom } from "./expertisement.atom";
import { ResidenceInfoAtom } from "./residence.atom";
import { ParticipationInfoAtom } from "./participation.atom";
import { BiographyInfoAtom } from "./biography.atom";

export const ProfileIntoAtom = selector({
  key: "profileState",
  get: ({ get }) => {
    const assistantInfo = get(AssistantInfoAtom);
    const contactInfo = get(ContactInfoAtom);
    const employmentInfo = get(EmploymentInfoAtom);
    const expertisementInfo = get(ExpertisementInfoAtom);
    const participationInfo = get(ParticipationInfoAtom);
    const personalInfo = get(PersonalInfoAtom);
    const residenceInfo = get(ResidenceInfoAtom);
    const biographyInfo = get(BiographyInfoAtom);

    return {
      assistantContactInfos: assistantInfo,
      contactInfo: contactInfo,
      employmentHistory: employmentInfo,
      expertiseHistory: expertisementInfo,
      misc: biographyInfo,
      participations: participationInfo,
      personalInfo: personalInfo,
      residenceAddress: residenceInfo,
    };
  },
});
