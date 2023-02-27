import { useCustomMediaQuery } from "@/common/theme/screen";
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
  isNecessary?: boolean;
  isVertical?: boolean;
};

export const FullSelection = ({
  label,
  value,
  onChange,
  isNecessary = false,
  isVertical = false,
}: FullSelectionType) => {
  const { isMedium } = useCustomMediaQuery();
  return (
    <Stack
      direction={isMedium || isVertical ? "column" : "row"}
      spacing={isVertical ? "0.55vw" : "1.11vw"}
      alignItems={isVertical ? "flex-start" : "center"}
    >
      <BasicLabel
        isVertical={isVertical}
        label={label}
        isNecessary={isNecessary}
      />
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
        {isNecessary && <TimezoneHelperText />}
      </FormControl>
    </Stack>
  );
};

const TimezoneHelperText = () => {
  return (
    <FormHelperText>{"Note: This is your default time zone."}</FormHelperText>
  );
};
