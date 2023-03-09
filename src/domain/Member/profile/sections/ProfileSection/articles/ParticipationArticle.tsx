import { BasicCheckbox } from "@/domain/Member/profile/common/components/checkbox";
import { CheckboxArticleTemplate } from "@/domain/Member/profile/common/components/template";
import { useParticipationArticle } from "../hooks/useParticipationArticle";

export const ParticipationArticle = () => {
  const { state } = useParticipationArticle();

  return (
    <CheckboxArticleTemplate title="Your Participation">
      <BasicCheckbox
        checkLabel="Phone Consultations"
        checked={state.phoneConsultation.isChecked}
        onChange={state.phoneConsultation.onChange}
      />
      <BasicCheckbox
        checkLabel="In-Person Meetings"
        checked={state.inPerson.isChecked}
        onChange={state.inPerson.onChange}
      />
      <BasicCheckbox
        checkLabel="Surveys"
        checked={state.surveys.isChecked}
        onChange={state.surveys.onChange}
      />
      <BasicCheckbox
        checkLabel="QuickPolls (Short Surveys)"
        checked={state.quickPolls.isChecked}
        onChange={state.quickPolls.onChange}
      />
      <BasicCheckbox
        checkLabel="Expert Witness"
        checked={state.expert.isChecked}
        onChange={state.expert.onChange}
      />
      <BasicCheckbox
        checkLabel="Long-Term Engagement"
        checked={state.engagement.isChecked}
        onChange={state.engagement.onChange}
      />
    </CheckboxArticleTemplate>
  );
};
