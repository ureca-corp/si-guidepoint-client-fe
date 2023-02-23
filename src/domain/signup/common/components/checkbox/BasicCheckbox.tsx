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
    <Stack direction="row" width={"auto"} alignItems="center">
      <Checkbox
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        inputProps={{ "aria-label": "controlled" }}
      />
      <Typography whiteSpace={"pre"}>{checkLabel}</Typography>
    </Stack>
  );
};
