import { useCustomMediaQuery } from "@/common/theme/screen";
import { CustomEmploymentHistoryItemInput } from "@/common/types/profile.type";
import { Stack } from "@mui/material";
import { DeleteButtonType, EmploymentItemProps } from "../types/item.type";
import { EmploymentItem } from "./EmploymentItem";

interface Props {
  itemsState: CustomEmploymentHistoryItemInput[];
  onItemChange: EmploymentItemProps;
  buttonState: DeleteButtonType;
}

export const EmploymentContainer = ({
  itemsState,
  onItemChange,
  buttonState,
}: Props) => {
  const { isMedium } = useCustomMediaQuery();
  return (
    <Stack width="100%" spacing={isMedium ? "20px" : "1.11vw"}>
      {itemsState.length >= 1 &&
        itemsState.map((it) => (
          <EmploymentItem
            key={it.id}
            itemState={it}
            onItemChange={onItemChange}
            deleteButtonState={buttonState}
          />
        ))}
    </Stack>
  );
};
