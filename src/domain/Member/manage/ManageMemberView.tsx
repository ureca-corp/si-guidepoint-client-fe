import { Stack } from "@mui/system";
import { css } from "@emotion/react";
import {
  AddRounded,
  KeyboardArrowLeftRounded,
  KeyboardArrowRightRounded,
  SearchRounded,
} from "@mui/icons-material";
import { Button } from "@mui/material";

export const ManageMemberView = () => {
  const models = [
    {
      number: 1,
      title: "프로모션 정보 수신 동의",
      dates: "2022. 12. 21. 오후: 7:08:25",
    },
    {
      number: 2,
      title: "개인정보 처리방침",
      dates: "2022. 12. 21. 오후: 7:08:25",
    },
    {
      number: 1,
      title: "서비스 이용약관",
      dates: "2022. 12. 21. 오후: 7:08:25",
    },
  ];

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

        {models.map((it, index) => (
          <Button css={sx.contentBox} key={index}>
            <p css={sx.boxNumber}>{it.number}</p>
            <p css={sx.boxTitle}>{it.title}</p>
            <p css={sx.boxDates}>{it.dates}</p>
          </Button>
        ))}
      </Stack>
      <div css={sx.pageWrap}>
        <Button css={sx.arrow}>
          <KeyboardArrowLeftRounded />
        </Button>
        <Button css={sx.pageNumber} variant="contained">
          1
        </Button>
        <Button css={sx.arrow}>
          <KeyboardArrowRightRounded />
        </Button>
      </div>
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
    line-height: 20px;
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
    display: flex;
  `,
  boxTitle: css`
    width: 100%;
    display: flex;
  `,
  boxDates: css`
    width: 360px;
    display: flex;
  `,
  contentBox: css`
    display: flex;
    padding: 12px 16px;
    border-top: solid 1px #e0e0e099;
    color: #546e7a;
    font-weight: 500;
    font-size: 14px;
    &:hover {
      background-color: rgba(0, 0, 0, 0.04);
    }
  `,
  pageWrap: css`
    display: flex;
    margin-top: 24px;
  `,
  arrow: css`
    color: rgba(0, 0, 0, 0.336);
    min-width: 8px;
  `,
  pageNumber: css`
    min-width: 0;
    width: 32px;
    height: 32px;
  `,
};
