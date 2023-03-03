import { useCustomMediaQuery } from "@/common/theme/screen";
import { Typography } from "@mui/material";

type BasicLabel = {
  label: string;
  isVertical?: boolean;
  isNecessary?: boolean;
};

export const BasicLabel = ({
  label,
  isVertical,
  isNecessary = false,
}: BasicLabel) => {
  const { isMedium } = useCustomMediaQuery();

  return (
    <Typography
      width={isMedium ? "100%" : "12vw"}
      textAlign={isMedium || isVertical ? "left" : "right"}
      variant={"subtitle1"}
    >
      {isNecessary && "*"}
      {label}
    </Typography>
  );
};
