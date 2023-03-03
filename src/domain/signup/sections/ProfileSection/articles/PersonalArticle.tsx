import { TextInput } from "@/domain/signup/common/components/input/TextInput";
import { FullSelection } from "@/domain/signup/common/components/selection/FullSelection";
import { ArticleTemplate } from "@/domain/signup/common/components/template";
import { usePersonalArticle } from "../hooks/usePersonalArticle";

export const PersonalArticle = () => {
  const { state } = usePersonalArticle();

  return (
    <ArticleTemplate title="Personal Information">
      <FullSelection
        label={"prefix"}
        value={state.prefix.value}
        onChange={state.prefix.onChange}
        options={state.prefix.options}
      />
      <TextInput
        label={"First Name"}
        value={state.firstName.value}
        onChange={state.firstName.onChange}
      />
      <TextInput
        label={"Middle Initial"}
        value={state.middleName.value}
        onChange={state.middleName.onChange}
      />
      <TextInput
        label={"Last Name"}
        value={state.lastName.value}
        onChange={state.lastName.onChange}
      />
      <TextInput
        label={"Suffix"}
        value={state.suffix.value}
        onChange={state.suffix.onChange}
      />
    </ArticleTemplate>
  );
};
