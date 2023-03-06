import { useCustomMediaQuery } from "@/common/theme/screen";
import { Stack } from "@mui/material";
import {
  DeleteButtonType,
  EmploymentItemProps,
  EmploymentItemType,
} from "../types/item.type";
import { EmploymentItem } from "./EmploymentItem";

interface Props {
  itemsState: EmploymentItemType[];
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
      {itemsState.map((it) => (
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
