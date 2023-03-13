import { ArticleTemplate } from "@/domain/Member/profile/common/components/template";
import { TextProps } from "@/domain/Member/profile/common/types/input.type";
import { ProfileReadonlyAtom } from "@/recoil/Profile/readonly/readonly.atom";
import { TextField } from "@mui/material";
import { useRecoilValue } from "recoil";

type ArticleProps = {
  props: TextProps;
};

export const ProfileLinkArticle = ({ props }: ArticleProps) => {
  const isReadOnly = useRecoilValue(ProfileReadonlyAtom);

  return (
    <ArticleTemplate title="Hyperlink to Linked-in Profile">
      <TextField
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        InputProps={{
          readOnly: isReadOnly,
        }}
      />
    </ArticleTemplate>
  );
};

const sx = {};
