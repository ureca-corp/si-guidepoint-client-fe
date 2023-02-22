import { css } from "@emotion/react";
import { FormControl, MenuItem, Select, Stack, TextField } from "@mui/material";
import { SelectProps, TextInputProps } from "../../types/input.type";
import { BasicLabel } from "../label";

type TextInputWithOptionProps = {
  textProps: TextInputProps;
  selectProps: SelectProps;
};

export const TextInputWithOption = ({
  textProps,
  selectProps,
}: TextInputWithOptionProps) => {
  return (
    <Stack direction="row" spacing="1.11vw" alignItems={"center"}>
      <BasicLabel>{textProps.label}</BasicLabel>
      <Stack direction="row" width="100%" alignItems={"center"} spacing="4px">
        <TextField
          value={textProps.value}
          onChange={(e) => textProps.onChange(e.target.value)}
          sx={{ flex: 3 }}
        />
        <FormControl fullWidth sx={{ flex: 2 }}>
          <Select
            value={selectProps.value}
            onChange={(e) => selectProps.onChange(e.target.value)}
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="Mr">Mr</MenuItem>
            <MenuItem value="Ms">Ms</MenuItem>
            <MenuItem value="Mrs">Mrs</MenuItem>
          </Select>
        </FormControl>
      </Stack>
    </Stack>
  );
};

const sx = {
  title: css`
    width: 10vw;
    text-align: right;
  `,
};
