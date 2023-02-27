import { LightColor } from "@/common/theme/colors";
import { useCustomMediaQuery } from "@/common/theme/screen";
import { Typography } from "@mui/material";
type TitleType = {
  title: string;
};

export const Title = ({ title }: TitleType) => {
  const { isMedium } = useCustomMediaQuery();
  return (
    <Typography
      width="100%"
      color={LightColor.TextColor1}
      height="1.25vw"
      lineHeight={1}
      fontWeight={700}
      variant="h6"
      mb={isMedium ? 2 : 1}
    >
      {title}
    </Typography>
  );
};
