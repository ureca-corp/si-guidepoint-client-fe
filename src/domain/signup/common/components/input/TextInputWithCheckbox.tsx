import { useCustomMediaQuery } from "@/common/theme/screen";
import { Stack, TextField } from "@mui/material";
import { CheckboxProps, TextInputProps } from "../../types/input.type";
import { BasicCheckbox } from "../checkbox";
import { BasicLabel } from "../label";

type TextInputWithCheckboxProps = {
  textProps: TextInputProps;
  checkboxProps: CheckboxProps;
};

export const TextInputWithCheckbox = ({
  textProps,
  checkboxProps,
}: TextInputWithCheckboxProps) => {
  const { isMedium } = useCustomMediaQuery();

  return (
    <Stack>
      <Stack
        direction={isMedium ? "column" : "row"}
        spacing="1.11vw"
        alignItems={"center"}
      >
        <BasicLabel isVertical={false} label={textProps.label} />
        <TextField
          fullWidth
          value={textProps.value}
          onChange={(e) => textProps.onChange(e.target.value)}
        />
      </Stack>
      <Stack
        direction="row"
        spacing="1.11vw"
        alignItems={"center"}
        paddingLeft={isMedium ? "0vw" : "9.5vw"}
      >
        <BasicCheckbox
          checkLabel={checkboxProps.label}
          checked={checkboxProps.value}
          onChange={checkboxProps.onChange}
        />
      </Stack>
    </Stack>
  );
};
