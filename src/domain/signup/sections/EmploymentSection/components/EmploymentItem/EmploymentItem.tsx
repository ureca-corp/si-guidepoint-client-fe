import { TextInput } from "@/domain/signup/common/components/input/TextInput";
import { Stack } from "@mui/material";
import { css } from "@emotion/react";
import { LightColor } from "@/common/theme/colors";
import { BasicCheckbox } from "@/domain/signup/common/components/checkbox";
import { StartEndDateSelection } from "./StartEndDateSelection";
import { DeleteButton } from "@/domain/signup/common/components/button";
import { useCustomMediaQuery } from "@/common/theme/screen";
import { DeleteButtonType, EmploymentItemType } from "../../types/item.type";
import { EmploymentTextInput } from "./EmploymentTextInput";

interface Props {
  itemState: EmploymentItemType;
  onItemChange: {
    employer: (id: number, newTxt: string) => void;
    job: (id: number, newTxt: string) => void;
    date: (id: number, newTxt: string) => void;
  };
  deleteButtonState: DeleteButtonType;
}

export const EmploymentItem = ({
  itemState,
  onItemChange,
  deleteButtonState,
}: Props) => {
  const { isMedium } = useCustomMediaQuery();
  return (
    <Stack css={sx.item(isMedium)}>
      <BasicCheckbox
        isVertical={!isMedium}
        checkLabel={isMedium ? "Currently Employed" : "Currently\nEmployed"}
        checked={true}
        onChange={() => null}
      />
      <EmploymentTextInput
        isVertical
        label={"Employer"}
        id={itemState.id}
        value={itemState.employer}
        onTextChange={onItemChange.employer}
      />
      <EmploymentTextInput
        isVertical
        label="Job Title"
        id={itemState.id}
        value={itemState.job}
        onTextChange={onItemChange.job}
      />
      <StartEndDateSelection isVertical={isMedium} />

      {deleteButtonState.isVisible && (
        <DeleteButton onClick={() => deleteButtonState.onClick(itemState.id)} />
      )}
    </Stack>
  );
};

const sx = {
  item: (isMedium: boolean) => css`
    position: relative;
    width: 100%;
    height: ${isMedium ? "unset" : "160px"};
    display: flex;
    flex-direction: ${isMedium ? "column" : "row"};
    align-items: ${isMedium ? "unset" : "flex-start"};
    justify-content: space-between;
    gap: ${isMedium ? "20px" : "unset"};
    padding: ${isMedium ? "20px" : "1.11vw"};
    border: 1px solid ${LightColor.BorderColor1};
    border-radius: 12px;
  `,
};
