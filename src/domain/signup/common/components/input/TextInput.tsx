import { css } from "@emotion/react";
import { Stack, TextField, Typography } from "@mui/material";

type TextInputType = {
  label: string;
  value: string;
  onChange: (v: string) => void;
};

export const TextInput = ({ label, value, onChange }: TextInputType) => {
  return (
    <Stack direction="row" spacing="1.11vw" alignItems={"center"}>
      <Typography sx={{ width: "12.5vw" }}>{label}</Typography>
      <TextField
        fullWidth
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </Stack>
  );
};
