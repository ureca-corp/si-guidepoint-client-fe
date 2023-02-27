import { ArticleTemplate } from "@/domain/signup/common/components/template";
import { AddItemButton } from "../../EmploymentSection/components";

export const SocialMediaLinkArticle = () => {
  return (
    <ArticleTemplate title="Hyperlinks to Social Media Profiles">
      <AddItemButton text={"Add Social Media Link"} onClick={() => null} />
    </ArticleTemplate>
  );
};
