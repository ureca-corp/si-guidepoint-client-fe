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
import { useState } from "react";

export const LoginView = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const handleEmailChange = (value: string) => {
    setEmail(value);
  };
  const handlePwChange = (value: string) => {
    setPw(value);
  };
  const isFilled = email !== "" && pw !== "";

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
        <Button disabled={!isFilled} css={sx.button} variant="contained">
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
  button: css`
    padding: 12px;
  `,
};
