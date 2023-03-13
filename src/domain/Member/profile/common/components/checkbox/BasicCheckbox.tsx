import { useCustomMediaQuery } from "@/common/theme/screen";
import { ProfileReadonlyAtom } from "@/recoil/Profile/readonly/readonly.atom";
import { Checkbox, Stack, Typography } from "@mui/material";
import { useRecoilValue } from "recoil";

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
  const { isMedium } = useCustomMediaQuery();
  const isReadOnly = useRecoilValue(ProfileReadonlyAtom);

  return (
    <Stack
      direction={isVertical ? "column-reverse" : "row"}
      width={isMedium ? "100%" : "auto"}
      alignItems={isVertical ? "flex-start" : "center"}
    >
      <Checkbox
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        inputProps={{ "aria-label": "controlled" }}
        disabled={isReadOnly}
      />
      <Typography width={isMedium ? "100%" : "unset"} whiteSpace={"pre"}>
        {checkLabel}
      </Typography>
    </Stack>
  );
};
