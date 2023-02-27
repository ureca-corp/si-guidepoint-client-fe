import { ArticleTemplate } from "@/domain/signup/common/components/template";
import { TextProps } from "@/domain/signup/common/types/input.type";
import { TextField } from "@mui/material";

type ArticleProps = {
  props: TextProps;
};

export const ProfileLinkArticle = ({ props }: ArticleProps) => {
  return (
    <ArticleTemplate title="Hyperlink to Linked-in Profile">
      <TextField
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
      />
    </ArticleTemplate>
  );
};

const sx = {};
