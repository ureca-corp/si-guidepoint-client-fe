import { useCustomMediaQuery } from "@/common/theme/screen";
import { ProfileReadonlyAtom } from "@/recoil/Profile/readonly/readonly.atom";
import { Stack, TextField } from "@mui/material";
import { useRecoilValue } from "recoil";
import { TextInputProps } from "../../types/input.type";
import { BasicLabel } from "../label";

export const TextInput = ({
  label,
  value,
  onChange,
  isVertical = false,
  isTitleLefted = false,
}: TextInputProps) => {
  const { isMedium } = useCustomMediaQuery();
  const isReadOnly = useRecoilValue(ProfileReadonlyAtom);

  return (
    <Stack
      direction={isMedium || isVertical ? "column" : "row"}
      spacing={isVertical ? "0.55vw" : "1.11vw"}
      alignItems={isVertical ? "left" : "center"}
    >
      <BasicLabel
        isVertical={isVertical}
        isTitleLefted={isTitleLefted}
        label={label}
      />
      <TextField
        fullWidth
        value={value}
        onChange={(e) => onChange(e.target.value)}
        InputProps={{
          readOnly: isReadOnly,
        }}
      />
    </Stack>
  );
};
