import { MediaItem } from "@/common/types/item.type";
import { ArticleTemplate } from "@/domain/signup/common/components/template";
import { SocialMediaProfile } from "@/recoil/Profile/biography.atom";
import { AddItemButton } from "../../EmploymentSection/components";
import { SocialMediaLinkItem } from "../components/SocialMediaLinkItem";

interface ArticleProps {
  props: {
    list: SocialMediaProfile[];
    onChange: {
      type: (id: number, v: string) => void;
      link: (id: number, v: string) => void;
    };
    addButton: {
      isVisible: boolean;
      onClick: () => void;
    };
    deleteButton: {
      onClick: (itemId: number) => void;
    };
  };
}

export const SocialMediaLinkArticle = ({ props }: ArticleProps) => {
  return (
    <ArticleTemplate title="Hyperlinks to Social Media Profiles">
      {props.list.map((it, index) => (
        <SocialMediaLinkItem
          key={index}
          id={index}
          itemState={it}
          onChangeState={props.onChange}
          onDelete={props.deleteButton.onClick}
        />
      ))}
      {props.addButton.isVisible && (
        <AddItemButton
          text={"Add Social Media Link"}
          onClick={props.addButton.onClick}
        />
      )}
    </ArticleTemplate>
  );
};
