import { BasicDialog } from "@/common/components/Dialog/BasicDialog";
import { MediaQueries } from "@/common/theme/screen";
import { css } from "@emotion/react";
import { LockRounded, MailOutlineRounded } from "@mui/icons-material";
import {
  Button,
  Card,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useMemberSignupView } from "./useMemberSignupView";

export const MemberSignupView = () => {
  const { email, pw, confirmPw, button, fetchState } = useMemberSignupView();

  return (
    <div css={sx.root}>
      <Card css={sx.inner}>
        <div css={sx.title}>
          <Typography variant={"h4"}>{"SIGN UP"}</Typography>
        </div>
        <div css={sx.text}>
          <Typography variant={"body1"}>
            {"가입할 이메일과 비밀번호를 입력하세요."}
          </Typography>
        </div>
        <TextField
          label="이메일 입력"
          css={sx.input}
          value={email.value}
          onChange={(e) => email.onChange(e.target.value)}
          error={email.value !== "" && email.isError}
          helperText={
            email.value !== "" &&
            email.isError &&
            "이메일 형식이 맞지 않습니다."
          }
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MailOutlineRounded />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          type="password"
          label="비밀번호 입력"
          css={sx.input}
          value={pw.value}
          onChange={(e) => pw.onChange(e.target.value)}
          error={pw.value !== "" && pw.isError}
          helperText={
            pw.value !== "" &&
            pw.isError &&
            "영문자로 시작하여 특수문자를 포함한 8-20자 여야 합니다."
          }
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockRounded />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          type="password"
          label="비밀번호 확인"
          css={sx.input}
          value={confirmPw.value}
          onChange={(e) => confirmPw.onChange(e.target.value)}
          error={confirmPw.isError}
          helperText={confirmPw.isError && "비밀번호가 일치하지 않습니다."}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockRounded />
              </InputAdornment>
            ),
          }}
        />
        <Button
          variant="contained"
          css={sx.button}
          disabled={!button.isNotDisabled || fetchState.loading}
          onClick={button.onSubmit}
        >
          {"SIGN UP"}
        </Button>
      </Card>
      <BasicDialog />
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  inner: css`
    display: flex;
    flex-direction: column;
    max-width: 400px;
    width: 100%;
    padding: 48px 36px;
    margin-top: 80px;
    @media ${MediaQueries.sm} {
      padding: 48px 12px;
    }
  `,
  title: css`
    text-align: center;
  `,
  text: css`
    text-align: center;
    margin-bottom: 40px;
  `,
  input: css`
    margin-bottom: 20px;
  `,
  button: css`
    padding: 12px;
  `,
};
