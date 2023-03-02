import { useCustomMediaQuery } from "@/common/theme/screen";
import { Checkbox, Stack, Typography } from "@mui/material";

interface Props {
  id: number;
  checkLabel: string;
  checked: boolean;
  onChange: (id: number, check: boolean) => void;
  isVertical: boolean;
}

export const EmploymentCheckbox = ({
  id,
  checkLabel,
  checked,
  onChange,
  isVertical = false,
}: Props) => {
  const { isMedium } = useCustomMediaQuery();
  return (
    <Stack
      direction={isVertical ? "column-reverse" : "row"}
      width={isMedium ? "100%" : "auto"}
      alignItems={isVertical ? "flex-start" : "center"}
    >
      <Checkbox
        checked={checked}
        onChange={(e) => onChange(id, e.target.checked)}
        inputProps={{ "aria-label": "controlled" }}
      />
      <Typography width={isMedium ? "100%" : "unset"} whiteSpace={"pre"}>
        {checkLabel}
      </Typography>
    </Stack>
  );
};
