import { LightColor } from "@/common/theme/colors";
import { useCustomMediaQuery } from "@/common/theme/screen";
import { TextInput } from "@/domain/signup/common/components/input/TextInput";
import { TextProps } from "@/domain/signup/common/types/input.type";
import { css } from "@emotion/react";
import { Stack } from "@mui/material";

type ExpertiseAreaItemProps = {
  sectorProps: TextProps;
  industryProps: TextProps;
  businessProps: TextProps;
  departmentProps: TextProps;
  roleProps: TextProps;
};

export const ExpertiseAreaItem = (p: ExpertiseAreaItemProps) => {
  const { isMedium } = useCustomMediaQuery();
  return (
    <Stack css={sx.item(isMedium)}>
      <TextInput
        label={"Sector"}
        value={p.sectorProps.value}
        onChange={p.sectorProps.onChange}
        isVertical
      />
      <TextInput
        label={"Industry"}
        value={p.industryProps.value}
        onChange={p.industryProps.onChange}
        isVertical
      />
      <TextInput
        label={"Business Type"}
        value={p.businessProps.value}
        onChange={p.businessProps.onChange}
        isVertical
      />
      <TextInput
        label={"Department"}
        value={p.departmentProps.value}
        onChange={p.departmentProps.onChange}
        isVertical
      />
      <TextInput
        label={"Role"}
        value={p.roleProps.value}
        onChange={p.roleProps.onChange}
        isVertical
      />
    </Stack>
  );
};

const sx = {
  item: (isMedium: boolean) => css`
    width: 100%;
    gap: ${isMedium ? "20px" : "1.11vw"};
    border: 1px solid ${LightColor.BorderColor1};
    padding: ${isMedium ? "20px" : "1.11vw"};
    border-radius: 12px;
  `,
};
