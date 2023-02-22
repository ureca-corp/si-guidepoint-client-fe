import { Stack } from "@mui/system";
import { css } from "@emotion/react";
import { AddRounded, SearchRounded } from "@mui/icons-material";
import { Button } from "@mui/material";

export const ManageMemberView = () => {
  return (
    <Stack css={sx.root}>
      <p css={sx.title}>멤버관리</p>
      <div css={sx.subTitleWrap}>
        <p>목록</p>
        <div>
          <Button css={sx.button}>
            <SearchRounded />
          </Button>
          <Button css={sx.button}>
            <AddRounded />
          </Button>
        </div>
      </div>
      <Stack css={sx.box}>
        <div css={sx.top}>
          <span css={sx.boxNumber}>번호</span>
          <span css={sx.boxTitle}>제목</span>
          <span css={sx.boxDates}>생성일</span>
        </div>
        <div css={sx.contentBox}>
          <p css={sx.boxNumber}>1</p>
          <p css={sx.boxTitle}>프로모션 정보 수신 동의</p>
          <p css={sx.boxDates}>2022.12.21.오후:7:08:25</p>
        </div>
      </Stack>
    </Stack>
  );
};

const sx = {
  root: css`
    padding: 48px;
    color: #546e7a;
  `,
  title: css`
    font-size: 32px;
    font-weight: 600;
  `,
  subTitleWrap: css`
    display: flex;
    justify-content: space-between;
    margin: 24px 0;
    font-size: 20px;
    font-weight: 600;
  `,
  button: css`
    color: #546e7a;
    min-width: 0;
    width: 36px;
    height: 36px;
    border: 1px solid #e0e0e099;
    margin-left: 8px;
    &:hover {
      background-color: rgba(0, 0, 0, 0.04);
    }
  `,
  box: css`
    border: solid 1px #eceff1;
    font-size: 14px;
    font-weight: 600;
    border-radius: 8px;
    box-sizing: border-box;
    overflow: hidden;
  `,
  top: css`
    background-color: #eceff1;
    display: flex;
    padding: 12px 16px;
  `,
  boxNumber: css`
    width: 160px;
  `,
  boxTitle: css`
    width: 100%;
  `,
  boxDates: css`
    width: 360px;
  `,
  contentBox: css`
    display: flex;
    padding: 12px 16px;
  `,
};
