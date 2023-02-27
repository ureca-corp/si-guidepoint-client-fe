import { css } from "@emotion/react";
import { Button } from "@mui/material";
import { ButtonProps } from "../../types/input.type";

export const SubmitButton = (props: ButtonProps) => {
  return (
    <div>
      <Button variant="contained" onClick={props.onClick}>
        Submit
      </Button>
    </div>
  );
};
