import { ArticleTemplate } from "@/domain/signup/common/components/template";
import { Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { UseBioArticle } from "../hooks/UseBioArticle";

export const BioArticle = () => {
  const { text, handleTextChange } = UseBioArticle();

  console.log(text);
  return (
    <ArticleTemplate title="* Biography">
      <Typography>Please adhere to the following bio format:</Typography>
      <Typography>
        John Smith is the Chief Credit Officer at XXX, a regional bank in
        Illinois. In the position, he is responsible for reviewing the bank's
        loan portfolio to prevent or reduce losses, assuring documentation is in
        compliance with loan committee approvals. State and Federal Regulations,
        and assisting in the detection of deterioration in loan quality. Mr.
        Smith has over 25 years experience in bank lending, loan review and
        compliance, working at A,B & C banks. He has served as an advisor to
        banks and governments nationally on all aspects of bank lending. He has
        authored various bestsellig books inclluding "XXX" and "XXX".
      </Typography>
      <TextField
        value={text}
        onChange={(e) => handleTextChange(e.target.value)}
        multiline
        rows={8}
      />
      <Typography>Characters Remaining {2000 - text.length}</Typography>
    </ArticleTemplate>
  );
};