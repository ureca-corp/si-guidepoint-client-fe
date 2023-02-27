import { LightColor } from "@/common/theme/colors";
import { FullSelection } from "@/domain/signup/common/components/selection/FullSelection";
import { SelectProps } from "@/domain/signup/common/types/input.type";
import { css } from "@emotion/react";
import { Stack } from "@mui/material";

type ExpertiseAreaItemProps = {
  sectorProps: SelectProps;
  industryProps: SelectProps;
  businessProps: SelectProps;
  departmentProps: SelectProps;
  roleProps: SelectProps;
};

export const ExpertiseAreaItem = (p: ExpertiseAreaItemProps) => {
  return (
    <Stack css={sx.item}>
      <FullSelection
        label={"Sector"}
        value={p.sectorProps.value}
        onChange={p.sectorProps.onChange}
        isVertical
      ></FullSelection>
      <FullSelection
        label={"Industry"}
        value={p.industryProps.value}
        onChange={p.industryProps.onChange}
        isVertical
      ></FullSelection>
      <FullSelection
        label={"Business Type"}
        value={p.businessProps.value}
        onChange={p.businessProps.onChange}
        isVertical
      ></FullSelection>
      <FullSelection
        label={"Department"}
        value={p.departmentProps.value}
        onChange={p.departmentProps.onChange}
        isVertical
      ></FullSelection>
      <FullSelection
        label={"Role"}
        value={p.roleProps.value}
        onChange={p.roleProps.onChange}
        isVertical
      ></FullSelection>
    </Stack>
  );
};

const sx = {
  item: css`
    width: 100%;
    gap: 1.11vw;
    border: 1px solid ${LightColor.BorderColor1};
    padding: 1.11vw;
    border-radius: 12px;
  `,
};
