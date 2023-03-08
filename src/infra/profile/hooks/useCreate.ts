import { EmploymentInfoAtom } from "../../../recoil/Profile/employment.atom";
import { PersonalInfoAtom } from "../../../recoil/Profile/personal.atom";
import { AssistantInfoAtom } from "../../../recoil/Profile/assistant.atom";
import { ResidenceInfoAtom } from "../../../recoil/Profile/residence.atom";
import { useRecoilValue } from "recoil";
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";

export const useCreateProfile = () => {
  const personalInfo = useRecoilValue(PersonalInfoAtom);
  const assistantInfo = useRecoilValue(AssistantInfoAtom);
  const contactInfo = useRecoilValue(PersonalInfoAtom);
  const residenceInfo = useRecoilValue(ResidenceInfoAtom);
  const employmentInfo = useRecoilValue(EmploymentInfoAtom);
  //   const personalInfo = useRecoilValue(PersonalInfoAtom);

  const CREATE_PROFILE = gql`
    query {
        createProfileOwn(
            personalInfo: ${personalInfo}
            assistantContactInfos: ${assistantInfo}
            contactInfo: ${contactInfo}
            participations: ${residenceInfo}
            residenceAddress: ${residenceInfo}
            employmentHistory:  ${employmentInfo}
            expertiseHistory:  ${residenceInfo}
            misc: ${residenceInfo}
        )

        items {

        }
    }
    `;

  return useQuery<any>(CREATE_PROFILE);
};
