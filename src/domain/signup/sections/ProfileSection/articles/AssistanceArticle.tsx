import { TextInput } from "@/domain/signup/common/components/input/TextInput";
import { TextInputWithCheckbox } from "@/domain/signup/common/components/input/TextInputWithCheckbox";
import { ArticleTemplate } from "@/domain/signup/common/components/template";
import { useAssistantArticle } from "../hooks/useAssistantArticle";

export const AssistanceArticle = () => {
  const { state } = useAssistantArticle();

  return (
    <ArticleTemplate title="Assistant Contact Information">
      <TextInput
        label={"Assistant's Name and Phone"}
        value={state.assist1.name}
        onChange={state.assist1.onNameChange}
      />
      <TextInputWithCheckbox
        textProps={{
          label: "Assistant's Email",
          value: state.assist1.email,
          onChange: state.assist1.onEmailChange,
        }}
        checkboxProps={{
          label: "Copy Assistant on Email",
          value: state.assist1.checked,
          onChange: state.assist1.onCheckChange,
        }}
      />
      <TextInput
        label={"Assistant's Name and Phone"}
        value={state.assist2.name}
        onChange={state.assist2.onNameChange}
      />
      <TextInputWithCheckbox
        textProps={{
          label: "Assistant's Email",
          value: state.assist2.email,
          onChange: state.assist2.onEmailChange,
        }}
        checkboxProps={{
          label: "Copy Assistant on Email",
          value: state.assist2.checked,
          onChange: state.assist2.onCheckChange,
        }}
      />
    </ArticleTemplate>
  );
};
