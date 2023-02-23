import { Stack } from "@mui/material";
import { AddItemButton } from "./AddItemButton";
import { EmploymentItem } from "./EmploymentItem";

export const EmploymentContainer = () => {
  return (
    <Stack width="100%" spacing={"1.11vw"}>
      <EmploymentItem />
      <EmploymentItem />
      <AddItemButton text={"Add Another Company"} onClick={() => null} />
    </Stack>
  );
};
