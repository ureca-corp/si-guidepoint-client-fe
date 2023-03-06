import { Stack } from "@mui/material";
import { css } from "@emotion/react";
import { LightColor } from "@/common/theme/colors";
import { StartEndDateSelection } from "./StartEndDateSelection";
import { DeleteButton } from "@/domain/signup/common/components/button";
import { useCustomMediaQuery } from "@/common/theme/screen";
import { DeleteButtonType, EmploymentItemProps } from "../../types/item.type";
import { EmploymentTextInput } from "./EmploymentTextInput";
import { EmploymentCheckbox } from "./EmploymentCheckbox";
import { EmploymentHistoryItemInput } from "@/recoil/Profile/employment.atom";

interface Props {
  itemState: EmploymentHistoryItemInput;
  onItemChange: EmploymentItemProps;
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
      <EmploymentCheckbox
        id={itemState.id}
        isVertical={!isMedium}
        checkLabel={isMedium ? "Currently Employed" : "Currently\nEmployed"}
        checked={itemState.isCurrentlyEmployed}
        onChange={onItemChange.isCurrEmployed}
      />
      <EmploymentTextInput
        isVertical
        label={"Employer"}
        id={itemState.id}
        value={itemState.employerName}
        onTextChange={onItemChange.employer}
      />
      <EmploymentTextInput
        isVertical
        label="Job Title"
        id={itemState.id}
        value={itemState.jobTitle}
        onTextChange={onItemChange.job}
      />
      <StartEndDateSelection
        id={itemState.id}
        startDateState={{
          month: {
            value: itemState.startedAt,
            onChange: onItemChange.startDate.month,
          },
          year: {
            value: itemState.startedAt,
            onChange: onItemChange.startDate.year,
          },
        }}
        endDateState={{
          month: {
            value: itemState.endedAt,
            onChange: onItemChange.endDate.month,
          },
          year: {
            value: itemState.endedAt,
            onChange: onItemChange.endDate.year,
          },
        }}
        isVertical={isMedium}
      />

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
