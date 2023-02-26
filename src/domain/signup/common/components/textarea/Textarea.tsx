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
  return (
    <Stack
      direction={isVertical ? "column" : "row"}
      spacing={isVertical ? "0.55vw" : "1.11vw"}
      alignItems={isVertical ? "left" : "row"}
    >
      <BasicLabel sx={{ textAlign: isVertical ? "left" : "right" }}>
        {label}
      </BasicLabel>
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
