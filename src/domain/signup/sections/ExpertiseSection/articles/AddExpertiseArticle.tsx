import { ArticleWithDescTemplate } from "@/domain/signup/common/components/template/ArticleWithDescTemplate";
import { AddItemButton } from "../../EmploymentSection/components";
import { ExpertiseAreaItem } from "../components";

export const AddExpertiseArticle = () => {
  return (
    <ArticleWithDescTemplate
      title="Expertise"
      desc={
        "Please spcity your area of expertise.\n\nPrimary Area of Expertise"
      }
    >
      <ExpertiseAreaItem
        sectorProps={{ value: "Mr", onChange: () => null }}
        industryProps={{ value: "Mr", onChange: () => null }}
        businessProps={{ value: "Mr", onChange: () => null }}
        departmentProps={{ value: "Mr", onChange: () => null }}
        roleProps={{ value: "Mr", onChange: () => null }}
      />
      <AddItemButton
        text="Add Another Area of Expertise"
        onClick={() => null}
      />
    </ArticleWithDescTemplate>
  );
};
