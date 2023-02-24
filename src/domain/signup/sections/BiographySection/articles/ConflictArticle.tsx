import { ArticleTemplate } from "@/domain/signup/common/components/template";
import { Button, TextField, Typography } from "@mui/material";
import { UseConflictArticle } from "../hooks/UseConflictArticle";
import { css } from "@emotion/react";

export const ConflictArticle = () => {
  const { text, handleTextChange } = UseConflictArticle();

  return (
    <div css={sx.root}>
      <ArticleTemplate title="Compliance Conflicts">
        <Typography>
          Out records indicate that you have listed the folling restrictions or
          conflicts of interest in respect of your consulting. This information
          mst be up to date before you may participate in any consultation
        </Typography>
        <Typography>
          Please provide keywords across the provided categories below to help
          us match yoru profile to our client research projects (Please use
          commas to separate items).
        </Typography>
        <TextField
          value={text}
          onChange={(e) => handleTextChange(e.target.value)}
          multiline
          rows={8}
        />
      </ArticleTemplate>
      <Button css={sx.submitButton} variant="contained" onClick={() => null}>
        Submit
      </Button>
    </div>
  );
};

const sx = {
  root: css`
    margin-top: 40px;
  `,
  submitButton: css`
    margin-top: 20px;
  `,
};
