import { ArticleTemplate } from "@/domain/signup/common/components/template";
import { Button } from "@mui/material";
import { css } from "@emotion/react";

export const ResumeArticle = () => {
  return (
    <ArticleTemplate title="Resume">
      <div>
        <Button css={sx.uploadButton} variant="contained" component="label">
          Upload File
          <input type="file" hidden />
        </Button>
      </div>
    </ArticleTemplate>
  );
};

const sx = {
  uploadButton: css`
    margin-top: 20px;
  `,
};
