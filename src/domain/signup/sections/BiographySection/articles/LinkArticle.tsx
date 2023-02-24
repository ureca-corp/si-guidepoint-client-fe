import { ArticleTemplate } from "@/domain/signup/common/components/template";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { css } from "@emotion/react";
import { AddItemButton } from "../../EmploymentSection/components";
import { UseLinkArticle } from "../hooks/UseLinkArticle";

export const LinkArticle = () => {
  const { link, handleLinkChange } = UseLinkArticle();
  return (
    <div>
      <div css={sx.template}>
        <ArticleTemplate title="Hyperlink to Linked-in Profile">
          <TextField
            value={link}
            onChange={(e) => handleLinkChange(e.target.value)}
          />
        </ArticleTemplate>
      </div>
      <div css={sx.template}>
        <ArticleTemplate title="Hyperlinks to Social Media Profiles">
          <AddItemButton text={"Add Social Media Link"} onClick={() => null} />
        </ArticleTemplate>
      </div>
      <div css={sx.template}>
        <ArticleTemplate title="Resume">
          <div>
            <Button css={sx.uploadButton} variant="contained" component="label">
              Upload File
              <input type="file" hidden />
            </Button>
          </div>
        </ArticleTemplate>
      </div>
    </div>
  );
};

const sx = {
  template: css`
    margin-top: 40px;
  `,
  uploadButton: css`
    margin-top: 20px;
  `,
};
