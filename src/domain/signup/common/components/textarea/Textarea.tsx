import { useCustomMediaQuery } from "@/common/theme/screen";
import { Stack, TextField } from "@mui/material";
import { TextareaProps } from "../../types/input.type";
import { BasicLabel } from "../label";

export const TextArea = ({
  label,
  value,
  onChange,
  row = 5,
  isVertical,
}: TextareaProps) => {
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
        multiline
        rows={row}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </Stack>
  );
};
