import { css } from "@emotion/react";
import { Button, TextField } from "@mui/material";

type BaseFormProps = {
  id: string;
  handleIdChange: (v: string) => void;
  pw: string;
  handlePwChange: (v: string) => void;
  handleCancel: () => void;
  submitButtonDisabled: boolean;
  handleSubmit: () => void;
};

export const BaseForm = ({
  id,
  handleIdChange,
  pw,
  handlePwChange,
  handleCancel,
  submitButtonDisabled,
  handleSubmit,
}: BaseFormProps) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
      `}
    >
      <TextField
        placeholder="id"
        value={id}
        onChange={(e) => handleIdChange(e.target.value)}
      />
      <TextField
        placeholder="pw"
        value={pw}
        onChange={(e) => handlePwChange(e.target.value)}
      />

      <div
        css={css`
          display: flex;
        `}
      >
        <Button onClick={handleCancel}>{"취소"}</Button>
        <Button disabled={submitButtonDisabled} onClick={handleSubmit}>
          {"제출"}
        </Button>
      </div>
    </div>
  );
};
