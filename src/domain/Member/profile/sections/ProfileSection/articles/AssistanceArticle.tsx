import { TextInput } from "@/domain/Member/profile/common/components/input/TextInput";
import { ArticleTemplate } from "@/domain/Member/profile/common/components/template";
import { Stack, Typography } from "@mui/material";
import { useAssistantArticle } from "../hooks/useAssistantArticle";
import { css } from "@emotion/react";
import { useCustomMediaQuery } from "@/common/theme/screen";
import { LightColor } from "@/common/theme/colors";

export const AssistanceArticle = () => {
  const { state } = useAssistantArticle();
  const { isMedium } = useCustomMediaQuery();

  return (
    <ArticleTemplate title="Assistant Contact Information">
      <Stack css={sx.item(isMedium)}>
        <Typography variant="h6">Assistant 1</Typography>
        <TextInput
          label={"Name"}
          value={state.assist1.name}
          onChange={state.assist1.onNameChange}
          isTitleLefted
        />
        <TextInput
          label={"Phone"}
          value={state.assist1.phone}
          onChange={state.assist1.onPhoneChange}
          isTitleLefted
        />
        <TextInput
          label={"Email"}
          value={state.assist1.email}
          onChange={state.assist1.onEmailChange}
          isTitleLefted
        />
      </Stack>

      <Stack css={sx.item(isMedium)}>
        <Typography variant="h6">Assistant 2</Typography>
        <TextInput
          label={"Name"}
          value={state.assist2.name}
          onChange={state.assist2.onNameChange}
          isTitleLefted
        />
        <TextInput
          label={"Phone"}
          value={state.assist2.phone}
          onChange={state.assist2.onPhoneChange}
          isTitleLefted
        />
        <TextInput
          label={"Email"}
          value={state.assist2.email}
          onChange={state.assist2.onEmailChange}
          isTitleLefted
        />
      </Stack>
    </ArticleTemplate>
  );
};

const sx = {
  item: (isMedium: boolean) => css`
    width: 100%;
    gap: ${isMedium ? "20px" : "1.11vw"};
    border: 1px solid ${LightColor.BorderColor1};
    padding: ${isMedium ? "20px" : "1.11vw"};
    border-radius: 12px;
  `,
};
