import { ArticleWithDescTemplate } from "@/domain/signup/common/components/template/ArticleWithDescTemplate";
import { TextArea } from "@/domain/signup/common/components/textarea";
import { useKeywordExpertiseArticle } from "../hooks/useKeywordExpertiseArticle";

export const KeywordExpertiseArticle = () => {
  const { state } = useKeywordExpertiseArticle();
  return (
    <ArticleWithDescTemplate
      title={""}
      desc={
        "Please provide keywords across the provided categories below to help us match your profile to our client research projects (Please use commas to separate items)."
      }
    >
      <TextArea
        label={"Drugs & Technology"}
        value={state.drugs.value}
        onChange={state.drugs.onChange}
        row={3}
        isVertical
      />
      <TextArea
        label={"Research Interests"}
        value={state.research.value}
        onChange={state.research.onChange}
        row={3}
        isVertical
      />
      <TextArea
        label={"Board Certifications"}
        value={state.certifications.value}
        onChange={state.certifications.onChange}
        row={3}
        isVertical
      />
      <TextArea
        label={"Company Experience"}
        value={state.company.value}
        onChange={state.company.onChange}
        row={3}
        isVertical
      />
      <TextArea
        label={"Product Experience"}
        value={state.product.value}
        onChange={state.product.onChange}
        row={3}
        isVertical
      />
    </ArticleWithDescTemplate>
  );
};
