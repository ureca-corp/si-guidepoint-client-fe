import {
  ParticipationBooleanAtom,
  ParticipationInfoAtom,
} from "@/recoil/Profile/participation.atom";
import { useRecoilState } from "recoil";

export const useParticipationArticle = () => {
  // state
  const [participationBoolean, setParticipationBoolean] = useRecoilState(
    ParticipationBooleanAtom
  );
  const [participations, setParticipations] = useRecoilState(
    ParticipationInfoAtom
  );

  const handlePhoneConsultationChange = (v: boolean) => {
    setParticipationBoolean((old) => ({ ...old, phoneConsultation: v }));
    handleParitipationUpdateByKey("PhoneConsultations", v);
  };

  const handleInPersonChange = async (v: boolean) => {
    await setParticipationBoolean((old) => ({ ...old, inperson: v }));
    handleParitipationUpdateByKey("InPersonMeetings", v);
  };

  const handleSurveysChange = (v: boolean) => {
    setParticipationBoolean((old) => ({ ...old, surveys: v }));
    handleParitipationUpdateByKey("Surveys", v);
  };

  const handleQuickPollsChange = (v: boolean) => {
    setParticipationBoolean((old) => ({ ...old, quickPoll: v }));
    handleParitipationUpdateByKey("QuickPolls", v);
  };

  const handleExpertChange = async (v: boolean) => {
    await setParticipationBoolean((old) => ({ ...old, expert: v }));
    handleParitipationUpdateByKey("ExpertWitness", v);
  };

  const handleEngagementChange = (v: boolean) => {
    setParticipationBoolean((old) => ({ ...old, engagement: v }));
    handleParitipationUpdateByKey("LongTermEngagement", v);
  };

  const handleParitipationUpdateByKey = (key: string, isCheck: boolean) => {
    if (isCheck) {
      setParticipations((old) => [...old, key]);
    } else {
      const remains = participations.filter((it) => it != key);
      setParticipations(remains);
    }
  };

  return {
    state: {
      phoneConsultation: {
        isChecked: participationBoolean.phoneConsultation,
        onChange: handlePhoneConsultationChange,
      },
      inPerson: {
        isChecked: participationBoolean.inperson,
        onChange: handleInPersonChange,
      },
      surveys: {
        isChecked: participationBoolean.surveys,
        onChange: handleSurveysChange,
      },
      quickPolls: {
        isChecked: participationBoolean.quickPoll,
        onChange: handleQuickPollsChange,
      },
      expert: {
        isChecked: participationBoolean.expert,
        onChange: handleExpertChange,
      },
      engagement: {
        isChecked: participationBoolean.engagement,
        onChange: handleEngagementChange,
      },
    },
  };
};
