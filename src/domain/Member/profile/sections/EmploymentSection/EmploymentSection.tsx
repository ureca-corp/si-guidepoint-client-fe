import { ExperienceYearModels } from "@/common/models/input.model";
import { FullSelection } from "../../common/components/selection/FullSelection";
import { ArticleTemplate } from "../../common/components/template";
import { AddItemButton, EmploymentContainer } from "./components";
import { useEmploymentSection } from "./hooks/useEmploymentSection";

export const EmploymentSection = () => {
  const { sectorExperienceState, employmentItemState, addButton } =
    useEmploymentSection();
  return (
    <ArticleTemplate title="Employment History">
      <FullSelection
        label={"Years of Sector Experience"}
        value={sectorExperienceState.value}
        onChange={sectorExperienceState.onChange}
        options={ExperienceYearModels}
      />
      <EmploymentContainer
        itemsState={employmentItemState.list}
        onItemChange={employmentItemState.onChange}
        buttonState={employmentItemState.deleteButton}
      />
      {addButton.isVisible && (
        <AddItemButton
          text={"Add Another Company"}
          onClick={addButton.onClick}
        />
      )}
    </ArticleTemplate>
  );
};
