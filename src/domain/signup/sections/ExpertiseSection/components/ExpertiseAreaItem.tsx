import { LightColor } from "@/common/theme/colors";
import { useCustomMediaQuery } from "@/common/theme/screen";
import { css } from "@emotion/react";
import { Stack } from "@mui/material";
import { EmploymentTextInput } from "../../EmploymentSection/components/EmploymentItem/EmploymentTextInput";
import { ExpertiseItemProps, ExpertiseItemType } from "../types/item.type";

interface Props {
  itemState: ExpertiseItemType;
  onItemChange: ExpertiseItemProps;
}

export const ExpertiseAreaItem = ({ itemState, onItemChange }: Props) => {
  const { isMedium } = useCustomMediaQuery();
  return (
    <Stack css={sx.item(isMedium)}>
      <EmploymentTextInput
        id={itemState.id}
        label={"Sector"}
        value={itemState.sector}
        onTextChange={onItemChange.sector}
        isVertical
      />
      <EmploymentTextInput
        id={itemState.id}
        label={"Industry"}
        value={itemState.industry}
        onTextChange={onItemChange.industry}
        isVertical
      />
      <EmploymentTextInput
        id={itemState.id}
        label={"Business Type"}
        value={itemState.businessType}
        onTextChange={onItemChange.businessType}
        isVertical
      />
      <EmploymentTextInput
        id={itemState.id}
        label={"Department"}
        value={itemState.department}
        onTextChange={onItemChange.department}
        isVertical
      />
      <EmploymentTextInput
        id={itemState.id}
        label={"Role"}
        value={itemState.role}
        onTextChange={onItemChange.role}
        isVertical
      />
    </Stack>
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
