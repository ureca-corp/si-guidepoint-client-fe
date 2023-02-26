import { LightColor } from "@/common/theme/colors";
import { Typography } from "@mui/material";
type TitleType = {
  title: string;
};

export const Title = ({ title }: TitleType) => {
  return (
    <Typography
      width="100%"
      color={LightColor.TextColor1}
      height="1.25vw"
      fontSize="1.25vw"
      lineHeight={1}
      fontWeight={700}
    >
      {title}
    </Typography>
  );
};
