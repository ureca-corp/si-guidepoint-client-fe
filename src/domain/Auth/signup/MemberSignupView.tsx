import { LightColor } from "@/common/theme/colors";
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
import { useSignupView } from "./useSignupView";

export const MemberSignupView = () => {
  const { email, pw, confirmPw, button } = useSignupView();
  return (
    <div css={sx.root}>
      <Card css={sx.inner}>
        <div css={sx.title}>
          <Typography variant={"h4"}>{"SING UP"}</Typography>
        </div>
        <div css={sx.text}>
          <Typography variant={"body1"}>
            {"가입할 이메일과 비밀번호를 입력하세요."}
          </Typography>
        </div>
        <TextField
          value={email.value}
          onChange={(e) => email.onChange(e.target.value)}
          css={sx.input}
          label="이메일 입력"
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
          value={pw.value}
          onChange={(e) => pw.onChange(e.target.value)}
          css={sx.input}
          label="비밀번호 입력"
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
          value={confirmPw.value}
          onChange={(e) => confirmPw.onChange(e.target.value)}
          css={sx.input}
          label="비밀번호 확인"
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
          disabled={!button.isNotDisabled}
          css={sx.button}
          variant="contained"
        >
          LOGIN
        </Button>
      </Card>
    </div>
  );
};

const sx = {
  root: css`
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
  forgotPassword: css`
    text-align: center;
    color: ${LightColor.MainSurfaceColor};
    margin-bottom: 20px;
    cursor: pointer;
  `,
  button: css`
    padding: 12px;
  `,
};
