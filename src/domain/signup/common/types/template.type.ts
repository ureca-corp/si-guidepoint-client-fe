import { ReactNode } from "react";

export interface ArticleTemplateProps {
  title: string;
  children: ReactNode;
  checkboxEanabled?: boolean;
}

export interface ArticleWithDescTemplateProps extends ArticleTemplateProps {
  desc: string;
}
