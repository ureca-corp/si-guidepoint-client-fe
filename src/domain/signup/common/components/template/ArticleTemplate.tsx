import { Stack } from "@mui/material";
import { useState } from "react";
import { ArticleTemplateProps } from "../../types/template.type";
import { BasicCheckbox } from "../checkbox";
import { Title } from "../Title";

export const ArticleTemplate = ({
  title,
  children,
  checkboxEanabled = false,
}: ArticleTemplateProps) => {
  return (
    <Stack width="100%" spacing="1.11vw">
      {checkboxEanabled ? (
        <TitleWithCheckbox title={title} />
      ) : (
        <Title title={title} />
      )}

      {children}
    </Stack>
  );
};

type TitleWithCheckboxProps = {
  title: string;
};
const TitleWithCheckbox = ({ title }: TitleWithCheckboxProps) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckChange = (v: boolean) => {
    setIsChecked(v);
  };
  return (
    <Stack
      width="100%"
      direction="row"
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Title title={title} />
      <BasicCheckbox
        checkLabel={"Use (Billing Address)"}
        checked={isChecked}
        onChange={handleCheckChange}
      />
    </Stack>
  );
};
