import { TermsForm } from "@/common/components/terms-form/TermsForm";
import { Typography } from "@mui/material";
import { css } from "@emotion/react";

export const CreateTermsView = () => {
  return (
    <div css={sx.root}>
      <Typography variant={"h4"}>이용약관 작성</Typography>
      <div css={sx.detail}>
        <Typography variant={"h6"}>상세보기</Typography>
      </div>
      <TermsForm />
    </div>
  );
};

const sx = {
  root: css`
    margin-top: 40px;
  `,
  detail: css`
    margin: 12px 0;
  `,
};
