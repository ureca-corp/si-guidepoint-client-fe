import { Stack, TextField } from "@mui/material";
import { TextInputProps } from "../../types/input.type";
import { BasicLabel } from "../label";

export const TextInput = ({ label, value, onChange }: TextInputProps) => {
  return (
    <Stack direction="row" spacing="1.11vw" alignItems={"center"}>
      <BasicLabel>{label}</BasicLabel>
      <TextField
        fullWidth
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </Stack>
  );
};
