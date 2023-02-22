import { TextInput } from "@/domain/signup/common/components/input/TextInput";
import { Title } from "@/domain/signup/common/components/Title";
import { Stack } from "@mui/material";
import { usePersonalArticle } from "../../hooks/usePersonalArticle";

export const AssistanceArticle = () => {
  const { state } = usePersonalArticle();

  return (
    <Stack width="100%">
      <Title title={"Personal Information"} />
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
    </Stack>
  );
};
