import { useFetchProfile } from "@/infra/profile/hooks/useFetchProfile";
import {
  AssistantInfoAtom,
  ContactInfoAtom,
  ParticipationInfoAtom,
  PersonalInfoAtom,
  ResidenceInfoAtom,
} from "@/recoil/Profile";
import { ProfileReadonlyAtom } from "@/recoil/Profile/readonly/readonly.atom";
import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";
import { useSetRecoilState } from "recoil";

export const useProfileView = () => {
  const router = useRouter();
  const { data } = useFetchProfile();

  const setPersonalInfo = useSetRecoilState(PersonalInfoAtom);
  const setAssistantInfo = useSetRecoilState(AssistantInfoAtom);
  const setContactInfo = useSetRecoilState(ContactInfoAtom);
  const setResidenceInfo = useSetRecoilState(ResidenceInfoAtom);
  const setParticipationInfo = useSetRecoilState(ParticipationInfoAtom);
  const setProfileReadonly = useSetRecoilState(ProfileReadonlyAtom);

  // profile 데이터를 recoil state에 fetch
  const setProfileData = useCallback(() => {
    if (data) {
      const {
        personalInfo,
        assistantContactInfos,
        contactInfo,
        residenceAddress,
        participations,
      } = data;
      setPersonalInfo(personalInfo);
      setAssistantInfo(assistantContactInfos);
      setContactInfo(contactInfo);
      setResidenceInfo(residenceAddress);
      setParticipationInfo(participations);
    }
  }, [data]);

  useEffect(() => {
    setProfileData();
  }, [setProfileData]);

  if (router.asPath == "/profile/edit") return setProfileReadonly(false);
  console.log(data);

  return {};
};
