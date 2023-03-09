import { useCustomMediaQuery } from "@/common/theme/screen";
import { Typography } from "@mui/material";

type BasicLabel = {
  label: string;
  isVertical?: boolean;
  isNecessary?: boolean;
  isTitleLefted?: boolean;
};

export const BasicLabel = ({
  label,
  isVertical,
  isNecessary = false,
  isTitleLefted = false,
}: BasicLabel) => {
  const { isMedium } = useCustomMediaQuery();

  return (
    <Typography
      width={isMedium ? "100%" : isTitleLefted ? "5vw" : "12vw"}
      textAlign={isMedium || isVertical ? "left" : "right"}
      variant={"subtitle1"}
    >
      {isNecessary && "*"}
      {label}
    </Typography>
  );
};
