import { BasicDialog } from "@/common/components/Dialog/BasicDialog";
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
import Link from "next/link";
import { useLoginView } from "./useLoginView";

export const LoginView = () => {
  const { email, pw, buttonState, fetchState } = useLoginView();

  return (
    <form css={sx.root}>
      <Card css={sx.inner}>
        <div css={sx.title}>
          <Typography variant={"h4"}>{"LOGIN"}</Typography>
        </div>
        <div css={sx.text}>
          <Typography variant={"body1"}>{"로그인 후 이용해주세요."}</Typography>
        </div>

        <TextField
          autoComplete="on"
          value={email.value}
          onChange={(e) => email.onChange(e.target.value)}
          css={sx.input}
          label="이메일 입력"
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
          autoComplete="off"
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
        <Link style={{ textDecoration: "none" }} href="/password-request">
          <div css={sx.forgotPassword}>
            <Typography variant={"body2"}>
              {"비밀번호를 잊으셨나요?"}
            </Typography>
          </div>
        </Link>
        <Button
          variant="contained"
          css={sx.button}
          onClick={() => buttonState.onSubmit()}
          disabled={buttonState.disabled || fetchState.loading}
        >
          {"LOGIN"}
        </Button>
        <Link
          style={{ textDecoration: "none" }}
          href="/member-signup"
          css={sx.signup}
        >
          <Typography color={LightColor.TextColor1} variant={"caption"}>
            {"SIGN UP"}
          </Typography>
        </Link>
      </Card>
      <BasicDialog />
    </form>
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
    position: relative;

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
  signup: css`
    position: absolute;
    right: 36px;
    bottom: 20px;
    @media ${MediaQueries.sm} {
      right: 12px;
    }
  `,
};
