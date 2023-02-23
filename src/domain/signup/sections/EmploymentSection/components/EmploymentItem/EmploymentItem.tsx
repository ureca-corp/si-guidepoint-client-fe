import { TextInput } from "@/domain/signup/common/components/input/TextInput";
import { Stack } from "@mui/material";
import { css } from "@emotion/react";
import { LightColor } from "@/common/theme/colors";
import { BasicCheckbox } from "@/domain/signup/common/components/checkbox";
import { StartEndDateSelection } from "./StartEndDateSelection";
import { DeleteButton } from "@/domain/signup/common/components/button";

export const EmploymentItem = () => {
  return (
    <Stack css={sx.item}>
      <BasicCheckbox
        isVertical
        checkLabel={"Currently\nEmployed"}
        checked={true}
        onChange={() => null}
      />
      <TextInput
        isVertical
        label="Employer"
        value="sdf"
        onChange={() => null}
      />

      <TextInput
        isVertical
        label="Employer"
        value="sdf"
        onChange={() => null}
      />
      <StartEndDateSelection />
      <DeleteButton onClick={() => null} />
    </Stack>
  );
};

const sx = {
  item: css`
    position: relative;
    width: 100%;
    height: 160px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding: 1.11vw;
    border: 1px solid ${LightColor.BorderColor1};
    border-radius: 12px;
  `,
};
