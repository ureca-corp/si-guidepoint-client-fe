import { ArticleTemplate } from "@/domain/signup/common/components/template";
import { AddItemButton } from "../../EmploymentSection/components";

type ArticleProps = {
  props: {
    onUploadClick: () => void;
  };
};

export const SocialMediaLinkArticle = ({ props }: ArticleProps) => {
  return (
    <ArticleTemplate title="Hyperlinks to Social Media Profiles">
      <AddItemButton
        text={"Add Social Media Link"}
        onClick={props.onUploadClick}
      />
    </ArticleTemplate>
  );
};
