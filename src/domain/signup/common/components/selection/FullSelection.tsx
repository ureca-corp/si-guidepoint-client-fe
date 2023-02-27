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
  isVertical?: boolean;
};

export const FullSelection = ({
  label,
  value,
  onChange,
  captionEnabled = false,
  isVertical = false,
}: FullSelectionType) => {
  return (
    <Stack
      direction={isVertical ? "column" : "row"}
      spacing={isVertical ? "0.55vw" : "1.11vw"}
      alignItems={isVertical ? "flex-start" : "center"}
    >
      <BasicLabel sx={{ textAlign: isVertical ? "left" : "right" }}>
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
