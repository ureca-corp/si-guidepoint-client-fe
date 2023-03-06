import { MediaItem } from "@/common/types/item.type";
import { ArticleTemplate } from "@/domain/signup/common/components/template";
import { AddItemButton } from "../../EmploymentSection/components";
import { SocialMediaLinkItem } from "../components/SocialMediaLinkItem";

interface ArticleProps {
  props: {
    list: MediaItem[];
    onChange: {
      sns: (id: number, v: string) => void;
      address: (id: number, v: string) => void;
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
      {props.list.map((it) => (
        <SocialMediaLinkItem
          key={it.id}
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
