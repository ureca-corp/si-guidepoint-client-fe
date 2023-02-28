import { useCustomMediaQuery } from "@/common/theme/screen";
import { BasicLabel } from "@/domain/signup/common/components/label";
import { EmploymentTextInputProps } from "@/domain/signup/common/types/input.type";
import { Stack, TextField } from "@mui/material";

export const EmploymentTextInput = ({
  id,
  label,
  value,
  onTextChange,
  isVertical = false,
}: EmploymentTextInputProps) => {
  const { isMedium } = useCustomMediaQuery();

  return (
    <Stack
      direction={isMedium || isVertical ? "column" : "row"}
      spacing={isVertical ? "0.55vw" : "1.11vw"}
      alignItems={isVertical ? "flex-start" : "center"}
    >
      <BasicLabel isVertical={isVertical} label={label} />
      <TextField
        fullWidth
        value={value}
        onChange={(e) => onTextChange(id, e.target.value)}
      />
    </Stack>
  );
};
