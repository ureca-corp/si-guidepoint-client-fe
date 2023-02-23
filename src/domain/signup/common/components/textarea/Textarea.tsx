import { Stack, TextField } from "@mui/material";
import { TextInputProps } from "../../types/input.type";
import { BasicLabel } from "../label";

export const TextArea = ({ label, value, onChange }: TextInputProps) => {
  return (
    <Stack direction="row" spacing="1.11vw" alignItems={"center"}>
      <BasicLabel sx={{ textAlign: "right" }}>{label}</BasicLabel>
      <TextField
        fullWidth
        multiline
        rows={5}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </Stack>
  );
};
