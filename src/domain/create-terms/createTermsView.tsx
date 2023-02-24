import { TermsForm } from "@/common/components/terms-form/TermsForm";
import { Typography } from "@mui/material";
import { css } from "@emotion/react";
import { UseTermsForm } from "@/common/components/terms-form/UseTermsForm";

export const CreateTermsView = () => {
  const {
    title,
    content,
    isChecked,
    handleTitleChange,
    handleCotentChange,
    handleCheckBox,
    handleSubmit,
    submitButtonDisabled,
  } = UseTermsForm();
  return (
    <div css={sx.root}>
      <Typography variant={"h4"}>이용약관 작성</Typography>
      <div css={sx.detail}>
        <Typography variant={"h6"}>상세보기</Typography>
      </div>
      <TermsForm
        title={title}
        content={content}
        isChecked={isChecked}
        handleTitleChange={handleTitleChange}
        handleCotentChange={handleCotentChange}
        handleCheckBox={handleCheckBox}
        handleSubmit={handleSubmit}
        submitButtonDisabled={submitButtonDisabled}
      />
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
