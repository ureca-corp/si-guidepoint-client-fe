import { ArticleWithDescTemplate } from "@/domain/signup/common/components/template/ArticleWithDescTemplate";
import { AddItemButton } from "../../EmploymentSection/components";
import { ExpertiseAreaItem } from "../components";
import { useAddExpertiseArticle } from "../hooks/useAddExpertiseArticle";

export const AddExpertiseArticle = () => {
  const { state } = useAddExpertiseArticle();
  return (
    <ArticleWithDescTemplate
      title="Expertise"
      desc={
        "Please spcity your area of expertise.\n\nPrimary Area of Expertise"
      }
    >
      <ExpertiseAreaItem
        sectorProps={{
          value: state.sector.value,
          onChange: state.sector.onChange,
        }}
        industryProps={{
          value: state.industry.value,
          onChange: state.industry.onChange,
        }}
        businessProps={{
          value: state.businessType.value,
          onChange: state.businessType.onChange,
        }}
        departmentProps={{
          value: state.department.value,
          onChange: state.department.onChange,
        }}
        roleProps={{ value: state.role.value, onChange: state.role.onChange }}
      />
      <AddItemButton
        text="Add Another Area of Expertise"
        onClick={() => null}
      />
    </ArticleWithDescTemplate>
  );
};
