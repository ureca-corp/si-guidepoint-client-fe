import { useCustomMediaQuery } from "@/common/theme/screen";
import { Stack } from "@mui/material";
import { useState } from "react";
import { TitleProps } from "../../types/input.type";
import { ArticleTemplateProps } from "../../types/template.type";
import { BasicCheckbox } from "../checkbox";
import { Title } from "../Title";

export const ArticleTemplate = ({
  title,
  children,
  checkboxEanabled = false,
}: ArticleTemplateProps) => {
  const { isMedium } = useCustomMediaQuery();

  return (
    <Stack width="100%" spacing={isMedium ? "20px" : "1.11vw"}>
      {checkboxEanabled ? (
        <TitleWithCheckbox title={title} />
      ) : (
        <Title title={title} />
      )}
      {children}
    </Stack>
  );
};

const TitleWithCheckbox = ({ title }: TitleProps) => {
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
