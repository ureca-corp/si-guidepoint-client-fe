import { Stack, TextField } from "@mui/material";
import { TextInputProps } from "../../types/input.type";
import { BasicLabel } from "../label";

export const TextInput = ({
  label,
  value,
  onChange,
  isVertical = false,
}: TextInputProps) => {
  return (
    <Stack
      direction={isVertical ? "column" : "row"}
      spacing="1.11vw"
      alignItems={"center"}
    >
      <BasicLabel sx={{ textAlign: isVertical ? "left" : "right" }}>
        {label}
      </BasicLabel>
      <TextField
        fullWidth
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </Stack>
  );
};
