import { FormControl, MenuItem, Select, Stack } from "@mui/material";
import { BasicLabel } from "../label";

type TextInputType = {
  label: string;
  value: string;
  onChange: (v: string) => void;
};

export const FullSelection = ({ label, value, onChange }: TextInputType) => {
  return (
    <Stack direction="row" spacing="1.11vw" alignItems={"center"}>
      <BasicLabel>{label}</BasicLabel>
      <FormControl fullWidth>
        <Select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="Mr">Mr</MenuItem>
          <MenuItem value="Ms">Ms</MenuItem>
          <MenuItem value="Mrs">Mrs</MenuItem>
        </Select>
      </FormControl>
    </Stack>
  );
};
