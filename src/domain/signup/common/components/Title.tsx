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
      fontSize="1.25vw"
      fontWeight={700}
    >
      {title}
    </Typography>
  );
};
