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
  const { email, handleEmailChange, pw, handlePwChange, isFilled } =
    useLoginView();

  return (
    <div css={sx.root}>
      <Card css={sx.inner}>
        <div css={sx.title}>
          <Typography variant={"h4"}>{"LOGIN"}</Typography>
        </div>
        <div css={sx.text}>
          <Typography variant={"body1"}>{"로그인 후 이용해주세요."}</Typography>
        </div>

        <TextField
          value={email}
          onChange={(e) => handleEmailChange(e.target.value)}
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
          value={pw}
          onChange={(e) => handlePwChange(e.target.value)}
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

        <Button disabled={!isFilled} css={sx.button} variant="contained">
          LOGIN
        </Button>
      </Card>
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
