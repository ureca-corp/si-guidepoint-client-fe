import { TextInput } from "@/domain/signup/common/components/input/TextInput";
import { TextInputWithOption } from "@/domain/signup/common/components/input/TextInputWithOption";
import { FullSelection } from "@/domain/signup/common/components/selection/FullSelection";
import { ArticleTemplate } from "@/domain/signup/common/components/template";
import { useContactArticle } from "../hooks/useContactArticle";

export const ContactArticle = () => {
  const { state } = useContactArticle();

  return (
    <ArticleTemplate title="Contact Information">
      <TextInputWithOption
        textProps={{
          label: "Phone",
          value: state.phone.value,
          onChange: state.phone.onChange,
        }}
        selectProps={{
          value: state.phone.option,
          onChange: state.phone.onOptionChange,
        }}
      />
      <TextInputWithOption
        textProps={{
          label: "Alternate Phone",
          value: state.alterPhone.value,
          onChange: state.alterPhone.onChange,
        }}
        selectProps={{
          value: state.alterPhone.option,
          onChange: state.alterPhone.onOptionChange,
        }}
      />
      <TextInput
        label="Fax"
        value={state.fax.value}
        onChange={state.fax.onChange}
      />
      <TextInput
        label="Email"
        value={state.email.value}
        onChange={state.email.onChange}
      />
      <TextInput
        label="Confirm Email"
        value={state.confirmEamil.value}
        onChange={state.confirmEamil.onChange}
      />
      <TextInput
        label="IM"
        value={state.im.value}
        onChange={state.im.onChange}
      />
      <FullSelection
        label="IM Type"
        value={state.imType.value}
        onChange={state.imType.onChange}
        isNecessary
      />
    </ArticleTemplate>
  );
};
