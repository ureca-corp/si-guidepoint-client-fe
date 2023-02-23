import { css } from "@emotion/react";
import { Stack } from "@mui/material";
import { AddItemButton } from "./AddItemButton";
import { EmploymentItem } from "./EmploymentItem";

export const EmploymentContainer = () => {
  return (
    <Stack>
      <EmploymentItem />
      <EmploymentItem />
      <EmploymentItem />
      <AddItemButton text={"Add Another Company"} onClick={() => null} />
    </Stack>
  );
};
