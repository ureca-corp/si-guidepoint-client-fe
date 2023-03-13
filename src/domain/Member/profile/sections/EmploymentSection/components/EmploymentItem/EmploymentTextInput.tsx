import { useCustomMediaQuery } from "@/common/theme/screen";
import { BasicLabel } from "@/domain/Member/profile/common/components/label";
import { EmploymentTextInputProps } from "@/domain/Member/profile/common/types/input.type";
import { ProfileReadonlyAtom } from "@/recoil/Profile/readonly/readonly.atom";
import { Stack, TextField } from "@mui/material";
import { useRecoilValue } from "recoil";

export const EmploymentTextInput = ({
  id,
  label,
  value,
  onTextChange,
  isVertical = false,
}: EmploymentTextInputProps) => {
  const { isMedium } = useCustomMediaQuery();
  const isReadOnly = useRecoilValue(ProfileReadonlyAtom);

  return (
    <Stack
      direction={isMedium || isVertical ? "column" : "row"}
      spacing={isVertical ? "0.55vw" : "1.11vw"}
      alignItems={isVertical ? "flex-start" : "center"}
    >
      <BasicLabel isVertical={isVertical} label={label} />
      <TextField
        fullWidth
        value={value}
        onChange={(e) => onTextChange(id, e.target.value)}
        InputProps={{
          readOnly: isReadOnly,
        }}
      />
    </Stack>
  );
};
