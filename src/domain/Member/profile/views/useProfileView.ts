import {
  CustomEmploymentHistoryItemInput,
  EmploymentHistoryItemInput,
} from "@/common/types/profile.type";
import { useFetchProfile } from "@/infra/profile/hooks/useFetchProfile";
import {
  AssistantInfoAtom,
  ContactInfoAtom,
  ParticipationInfoAtom,
  PersonalInfoAtom,
  ResidenceInfoAtom,
  AreaOfExpertiseAtom,
  CustomKeywordExpertisementAtom,
  BiographyTextfieldsInfoAtom,
  ResumeFilenameAtom,
  MediaAtom,
} from "@/recoil/Profile";
import {
  EmploymentExperienceAtom,
  EmploymentItemAtom,
} from "@/recoil/Profile/employment.atom";
import { ProfileReadonlyAtom } from "@/recoil/Profile/readonly/readonly.atom";
import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";
import { useSetRecoilState } from "recoil";

export const useProfileView = () => {
  const router = useRouter();
  const { data } = useFetchProfile();

  const setPersonalInfo = useSetRecoilState(PersonalInfoAtom);
  const setProfileReadonly = useSetRecoilState(ProfileReadonlyAtom);
  const setAssistantInfo = useSetRecoilState(AssistantInfoAtom);
  const setContactInfo = useSetRecoilState(ContactInfoAtom);
  const setResidenceInfo = useSetRecoilState(ResidenceInfoAtom);
  const setParticipationInfo = useSetRecoilState(ParticipationInfoAtom);
  const setEmploymentItems = useSetRecoilState(EmploymentItemAtom);
  const setEmploymentExperience = useSetRecoilState(EmploymentExperienceAtom);
  const setCustomKeywordExpertisement = useSetRecoilState(
    CustomKeywordExpertisementAtom
  );
  const setAreaOfExpertise = useSetRecoilState(AreaOfExpertiseAtom);
  const setBiographyTextfieldsInfo = useSetRecoilState(
    BiographyTextfieldsInfoAtom
  );
  const setResumeName = useSetRecoilState(ResumeFilenameAtom);
  const setMedias = useSetRecoilState(MediaAtom);

  //   // profile 데이터를 recoil state에 fetch
  const setProfileData = useCallback(() => {
    if (data) {
      const {
        personalInfo,
        contactInfo,
        residenceAddress,
        participations,
        employmentHistory,
        expertiseHistory,
        misc,
      } = data.profileOwn;

      setPersonalInfo(personalInfo);
      setContactInfo({
        alternatePhoneInfo: contactInfo.alternatePhoneInfo ?? {
          number: "",
          type: "",
        },
        confirmEmail: contactInfo.confirmEmail ?? "",
        email: contactInfo.email ?? "",
        fax: contactInfo.fax ?? "",
        instanceMessengerInfo: contactInfo.instanceMessengerInfo ?? {
          address: "",
          type: "",
        },
        phoneInfo: contactInfo.phoneInfo ?? "",
      });
      setResidenceInfo(residenceAddress);
      setParticipationInfo(participations);
      setEmploymentItems(mapToEmploymentItems(employmentHistory.items));
      setEmploymentExperience(
        mapToExperienceYear(employmentHistory.yearsOfExperience)
      );
      setAreaOfExpertise(expertiseHistory.areaList);

      setCustomKeywordExpertisement({
        boardCertifications:
          expertiseHistory.keywords.boardCertifications.join(),
        companyExperience: expertiseHistory.keywords.companyExperience.join(),
        drugsAndTechnology: expertiseHistory.keywords.drugsAndTechnology.join(),
        productExperience: expertiseHistory.keywords.productExperience.join(),
        researchInterests: expertiseHistory.keywords.researchInterests.join(),
      });

      setBiographyTextfieldsInfo({
        biography: misc.biography,
        complianceConflicts: misc.complianceConflicts,
        linkedInProfileLink: misc.linkedInProfileLink,
        resumeLink: misc.resumeLink,
      });

      setResumeName(misc.resumeLink);
      setMedias(misc.socialMediaProfiles ?? []);

      console.log(employmentHistory.items[0].startedAt);
    }
  }, [data]);

  useEffect(() => {
    setProfileData();
  }, [setProfileData]);

  if (router.asPath == "/profile/edit") {
    setProfileReadonly(false);
  } else {
    setProfileReadonly(true);
  }

  return {};
};

const mapToEmploymentItems = (
  list: EmploymentHistoryItemInput[]
): CustomEmploymentHistoryItemInput[] => {
  const result = list.map((it) => ({
    id: it.id,
    isCurrentlyEmployed: it.isCurrentlyEmployed,
    employerName: it.employerName,
    jobTitle: it.jobTitle,
    startedMonth: it.startedAt.split("-")[1],
    startedYear: it.startedAt.split("-")[0],
    endedMonth: it.endedAt.split("-")[1],
    endedYear: it.endedAt.split("-")[0],
  }));

  return result;
};

const mapToExperienceYear = (year: string) => {
  switch (year) {
    case "Between1And5":
      return "1-5";
    case "Between6And10":
      return "6-10";
    case "Between11And15":
      return "11-15";
    case "Over16":
      return "16+";
    default:
      return "";
  }
};
