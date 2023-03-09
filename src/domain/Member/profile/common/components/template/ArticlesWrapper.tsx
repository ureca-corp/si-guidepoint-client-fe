import { useCustomMediaQuery } from "@/common/theme/screen";
import { Stack } from "@mui/material";
import { ReactNode } from "react";

type ArticlesWrapperProps = {
  children: ReactNode;
  isVertical?: boolean;
};

export const ArticlesWrapper = ({ children }: ArticlesWrapperProps) => {
  const { isMedium } = useCustomMediaQuery();

  return (
    <Stack
      width="100%"
      direction={isMedium ? "column" : "row"}
      spacing={isMedium ? "40px" : "2.77vw"}
    >
      {children}
    </Stack>
  );
};
