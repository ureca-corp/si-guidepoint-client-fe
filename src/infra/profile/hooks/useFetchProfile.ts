import { useSessionUser } from "@/common/auth/session/application";
import { CreateProfileInput } from "@/common/types/profile.type";
import { PersonalInfoAtom } from "@/recoil/Profile";
import { ApolloError, gql, useQuery } from "@apollo/client";
import { useSetRecoilState } from "recoil";
import { ProfileResponse } from "../dto/response.dto";

const FETCH_ROFILE = gql`
  query {
    profileOwn {
      id
      memberId
      personalInfo {
        prefix
        suffix
        firstName
        middleInitial
        lastName
      }
      assistantContactInfos {
        name
        phone
        email
      }
      contactInfo {
        phoneInfo {
          type
          number
        }
        instanceMessengerInfo {
          type
          address
        }
        alternatePhoneInfo {
          type
          number
        }
        fax
        email
        confirmEmail
      }
      participations
      residenceAddress {
        street1
        street2
        street3
        city
        postalCode
        country
        timeZone
      }
      employmentHistory {
        id
        yearsOfExperience
        items {
          id
          employerName
          jobTitle
          isCurrentlyEmployed
          startedAt
          endedAt
        }
      }
      expertiseHistory {
        id
        areaList {
          id
          sector
          industry
          role
        }
        keywords {
          drugsAndTechnology
          researchInterests
          boardCertifications
          companyExperience
          productExperience
        }
      }
      misc {
        biography
        linkedInProfileLink
        socialMediaProfiles {
          type
          link
        }
        resumeLink
        complianceConflicts
      }
      createdAt
      updatedAt
      deletedAt
    }
  }
`;

export const useFetchProfile = () => {
  const { accessToken } = useSessionUser().user;

  const { data } = useQuery<ProfileResponse>(FETCH_ROFILE, {
    context: {
      headers: {
        authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    },
    onError: (err: ApolloError) => {
      console.log(err);
    },
    onCompleted: (res: ProfileResponse) => {
      console.log(res);
    },
  });
  return { data };
};
