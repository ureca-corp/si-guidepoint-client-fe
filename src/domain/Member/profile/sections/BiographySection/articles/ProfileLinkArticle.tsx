import { ArticleTemplate } from "@/domain/Member/profile/common/components/template";
import { TextProps } from "@/domain/Member/profile/common/types/input.type";
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
