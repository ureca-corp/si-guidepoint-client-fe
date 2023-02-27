import { ArticleTemplate } from "@/domain/signup/common/components/template";
import { TextField } from "@mui/material";
import { css } from "@emotion/react";
import { useBioSection } from "../hooks/useBioSecion";

export const ProfileLinkArticle = () => {
  //   const { link, handleLinkChange } = UseLinkArticle();
  const { link, handleLinkChange } = useBioSection();
  return (
    <ArticleTemplate title="Hyperlink to Linked-in Profile">
      <TextField
        value={link}
        onChange={(e) => handleLinkChange(e.target.value)}
      />
    </ArticleTemplate>
  );
};

const sx = {};
