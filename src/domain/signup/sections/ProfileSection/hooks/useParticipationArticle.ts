import { useState } from "react";

export const useParticipationArticle = () => {
  const [phoneConsultation, setPhoneConsultation] = useState(false);
  const handlePhoneConsultationChange = (v: boolean) => {
    setPhoneConsultation(v);
  };

  const [inperson, setInperson] = useState(false);
  const handleInPersonChange = (v: boolean) => {
    setInperson(v);
  };

  const [surveys, setSurveys] = useState(false);
  const handleSurveysChange = (v: boolean) => {
    setSurveys(v);
  };

  const [quickPolls, setQuickPolls] = useState(false);
  const handleQuickPollsChange = (v: boolean) => {
    setQuickPolls(v);
  };

  const [expert, setExpert] = useState(false);
  const handleExpoerChange = (v: boolean) => {
    setExpert(v);
  };

  const [engagement, setEngagement] = useState(false);
  const handleEngagementChange = (v: boolean) => {
    setEngagement(v);
  };
  return {
    state: {
      phoneConsultation: {
        isChecked: phoneConsultation,
        onChange: handlePhoneConsultationChange,
      },
      inPerson: {
        isChecked: inperson,
        onChange: handleInPersonChange,
      },
      surveys: {
        isChecked: surveys,
        onChange: handleSurveysChange,
      },
      quickPolls: {
        isChecked: quickPolls,
        onChange: handleQuickPollsChange,
      },
      expert: {
        isChecked: expert,
        onChange: handleExpoerChange,
      },
      engagement: {
        isChecked: engagement,
        onChange: handleEngagementChange,
      },
    },
  };
};
