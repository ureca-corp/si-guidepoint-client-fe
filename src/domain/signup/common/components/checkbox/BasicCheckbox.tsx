import { Checkbox, Stack, Typography } from "@mui/material";

type BasicCheckboxProps = {
  checkLabel: string;
  checked: boolean;
  onChange: (v: boolean) => void;
};

export const BasicCheckbox = ({
  checkLabel,
  checked,
  onChange,
}: BasicCheckboxProps) => {
  return (
    <Stack direction="row" width="100%" alignItems="center">
      <Checkbox
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        inputProps={{ "aria-label": "controlled" }}
      />
      <Typography>{checkLabel}</Typography>
    </Stack>
  );
};
