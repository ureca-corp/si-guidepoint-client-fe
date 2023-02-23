import {
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import { BasicLabel } from "../label";

type FullSelectionType = {
  label: string;
  value: string;
  onChange: (v: string) => void;
  captionEnabled?: boolean;
};

export const FullSelection = ({
  label,
  value,
  onChange,
  captionEnabled = false,
}: FullSelectionType) => {
  return (
    <Stack direction="row" spacing="1.11vw" alignItems={"center"}>
      <BasicLabel sx={{ textAlign: "right" }}>
        {captionEnabled && `*`}
        {label}
      </BasicLabel>
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
        {captionEnabled && <TimezoneHelperText />}
      </FormControl>
    </Stack>
  );
};

const TimezoneHelperText = () => {
  return (
    <FormHelperText>{"Note: This is your default time zone."}</FormHelperText>
  );
};
