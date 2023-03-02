import { useCustomMediaQuery } from "@/common/theme/screen";
import { Stack, TextField } from "@mui/material";
import { TextInputProps } from "../../types/input.type";
import { BasicLabel } from "../label";

export const TextInput = ({
  label,
  value,
  onChange,
  isVertical = false,
}: TextInputProps) => {
  const { isMedium } = useCustomMediaQuery();

  return (
    <Stack
      direction={isMedium || isVertical ? "column" : "row"}
      spacing={isVertical ? "0.55vw" : "1.11vw"}
      alignItems={isVertical ? "left" : "center"}
    >
      <BasicLabel isVertical={isVertical} label={label} />
      <TextField
        fullWidth
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </Stack>
  );
};
