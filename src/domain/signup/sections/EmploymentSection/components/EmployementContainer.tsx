import { useCustomMediaQuery } from "@/common/theme/screen";
import { Stack } from "@mui/material";
import { AddItemButton } from "../../../common/components/button/AddItemButton";
import { EmploymentItem } from "./EmploymentItem";

export const EmploymentContainer = () => {
  const { isMedium } = useCustomMediaQuery();
  return (
    <Stack width="100%" spacing={isMedium ? "20px" : "1.11vw"}>
      <EmploymentItem />
      <EmploymentItem />
      <AddItemButton text={"Add Another Company"} onClick={() => null} />
    </Stack>
  );
};
