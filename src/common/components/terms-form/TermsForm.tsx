import { Button, Card, Checkbox, TextField, Typography } from "@mui/material";
import { css } from "@emotion/react";
import { useState } from "react";

type TermsFormProps = {
  title: string;
  content: string;
  isChecked: boolean;
  handleTitleChange: (value: string) => void;
  handleCotentChange: (value: string) => void;
  handleCheckBox: (checked: boolean) => void;
  handleSubmit: () => void;
  submitButtonDisabled: boolean;
};

export const TermsForm = ({
  title,
  content,
  isChecked,
  handleTitleChange,
  handleCotentChange,
  handleCheckBox,
  handleSubmit,
  submitButtonDisabled,
}: TermsFormProps) => {
  return (
    <div>
      <Card css={sx.card}>
        <ul>
          <li css={sx.list}>
            <div css={sx.listTitle}>
              <Typography variant={"h6"}>제목</Typography>
            </div>

            <TextField
              value={title}
              onChange={(e) => handleTitleChange(e.target.value)}
              css={sx.input}
              placeholder="제목을 입력해주세요."
            />
          </li>
          <li css={sx.list}>
            <div css={sx.listTitle}>
              <Typography variant={"h6"}>내용</Typography>
            </div>
            <TextField
              value={content}
              onChange={(e) => handleCotentChange(e.target.value)}
              css={sx.textarea}
              placeholder="내용을을 입력해주세요."
              minRows={14}
              multiline
            />
          </li>
          <li css={sx.list}>
            <div css={sx.listTitle}>
              <Typography variant={"h6"}>필수 여부</Typography>
            </div>
            <Checkbox
              checked={isChecked}
              onChange={(e) => handleCheckBox(e.target.checked)}
            />
          </li>
        </ul>
        <div css={sx.buttonWrap}>
          <Button variant="outlined">취소</Button>
          <Button
            disabled={submitButtonDisabled}
            onClick={handleSubmit}
            css={sx.btn}
            variant="contained"
          >
            등록
          </Button>
        </div>
      </Card>
    </div>
  );
};

const sx = {
  card: css`
    padding: 20px;
  `,
  list: css`
    display: flex;
    align-items: center;
    margin-bottom: 40px;
  `,
  listTitle: css`
    min-width: 180px;
  `,
  input: css`
    flex: 1;
  `,
  textarea: css`
    flex: 1;
    resize: none;
  `,
  buttonWrap: css`
    display: flex;
    justify-content: flex-end;
  `,
  btn: css`
    margin-left: 20px;
  `,
};
