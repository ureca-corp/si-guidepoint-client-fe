import { useCustomMediaQuery } from "@/common/theme/screen";
import { ArticleWithDescTemplate } from "@/domain/signup/common/components/template/ArticleWithDescTemplate";
import { Stack, Typography } from "@mui/material";
import { AddItemButton } from "../../EmploymentSection/components";
import { ExpertiseAreaItem } from "../components";
import { useAddExpertiseArticle } from "../hooks/useAddExpertiseArticle";

export const AddExpertiseArticle = () => {
  const { addButton, expertisementItemState } = useAddExpertiseArticle();
  const { isMedium } = useCustomMediaQuery();

  return (
    <ArticleWithDescTemplate
      title="Expertise"
      desc={"Please spcity your area of expertise."}
    >
      {expertisementItemState.list.map((it) => (
        <Stack key={it.id} spacing={isMedium ? "20px" : "1.11vw"}>
          {it.id == 0 ? (
            <Typography variant="subtitle2">{"Area of Expertise"}</Typography>
          ) : (
            <Typography variant="subtitle2">
              {"Secondary Area of Expertise"}
            </Typography>
          )}

          <ExpertiseAreaItem
            itemState={it}
            onItemChange={expertisementItemState.onChange}
          />
        </Stack>
      ))}

      {addButton.isVisible && (
        <AddItemButton
          text="Add Another Area of Expertise"
          onClick={addButton.onClick}
        />
      )}
    </ArticleWithDescTemplate>
  );
};
