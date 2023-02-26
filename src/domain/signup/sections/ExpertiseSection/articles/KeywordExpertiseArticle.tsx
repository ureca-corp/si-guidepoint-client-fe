import { ArticleWithDescTemplate } from "@/domain/signup/common/components/template/ArticleWithDescTemplate";
import { TextArea } from "@/domain/signup/common/components/textarea";

export const KeywordExpertiseArticle = () => {
  return (
    <ArticleWithDescTemplate
      title={""}
      desc={
        "Please provide keywords across the provided categories below to help us match your profile to our client research projects (Please use commas to separate items)."
      }
    >
      <TextArea
        label={"Drugs & Technology"}
        value={""}
        onChange={() => null}
        row={2}
        isVertical
      />
      <TextArea
        label={"Research Interests"}
        value={""}
        onChange={() => null}
        row={2}
        isVertical
      />
      <TextArea
        label={"Board Certifications"}
        value={""}
        onChange={() => null}
        row={2}
        isVertical
      />
      <TextArea
        label={"Company Experience"}
        value={""}
        onChange={() => null}
        row={2}
        isVertical
      />
      <TextArea
        label={"Product Experience"}
        value={""}
        onChange={() => null}
        row={2}
        isVertical
      />
    </ArticleWithDescTemplate>
  );
};
