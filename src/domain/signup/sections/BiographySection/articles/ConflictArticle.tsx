import { ArticleTemplate } from "@/domain/signup/common/components/template";
import { Button, TextField, Typography } from "@mui/material";
import { css } from "@emotion/react";
import { useBioSection } from "../hooks/useBioSecion";

export const ConflictArticle = () => {
  const { link, text, handleTextChange } = useBioSection();

  return (
    <div>
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
  submitButton: css`
    margin-top: 20px;
  `,
};
