import { ArticleTemplate } from "@/domain/signup/common/components/template";
import { Button, TextField, Typography } from "@mui/material";
import { TextProps } from "@/domain/signup/common/types/input.type";

type ArticleProps = {
  props: TextProps;
};

export const ConflictArticle = ({ props }: ArticleProps) => {
  return (
    <ArticleTemplate title="Compliance Conflicts">
      <Typography>
        {
          "Out records indicate that you have listed the folling restrictions or conflicts of interest in respect of your consulting. This information must be up to date before you may participate in any consultation"
        }
      </Typography>
      <Typography>
        {
          "Please provide keywords across the provided categories below to help us match yoru profile to our client research projects (Please use commas to separate items)."
        }
      </Typography>
      <TextField
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        multiline
        rows={8}
      />
    </ArticleTemplate>
  );
};
