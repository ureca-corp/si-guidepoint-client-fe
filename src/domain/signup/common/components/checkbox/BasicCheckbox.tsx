import { Checkbox, Stack, Typography } from "@mui/material";

type BasicCheckboxProps = {
  checkLabel: string;
  checked: boolean;
  onChange: (v: boolean) => void;
  isVertical?: boolean;
};

export const BasicCheckbox = ({
  checkLabel,
  checked,
  onChange,
  isVertical = false,
}: BasicCheckboxProps) => {
  return (
    <Stack
      direction={isVertical ? "column-reverse" : "row"}
      width={"auto"}
      alignItems={isVertical ? "flex-start" : "center"}
    >
      <Checkbox
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        inputProps={{ "aria-label": "controlled" }}
      />
      <Typography whiteSpace={"pre"}>{checkLabel}</Typography>
    </Stack>
  );
};
