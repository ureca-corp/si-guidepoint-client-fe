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
  return (
    <Stack>
      <Stack direction="row" spacing="1.11vw" alignItems={"center"}>
        <BasicLabel>{textProps.label}</BasicLabel>
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
        paddingLeft="9.5vw"
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
