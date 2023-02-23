import { css } from "@emotion/react";
import { Button, TextField } from "@mui/material";

export const LoginView = () => {
  return (
    <div css={sx.root}>
        <div></div>
      <p>login</p>
      <form action="submit" css={sx.form}>
        <TextField placeholder="USER NAME"></TextField>
        <TextField placeholder="PASSWORDE"></TextField>
        <Button>LOGIN</Button>
      </form>
    </div>
  );
};

const sx = {
  root: css`
    display: flex;
    flex-direction: column;
  `,
  form: css`
    display: flex;
    flex-direction: column;
  `,
};
