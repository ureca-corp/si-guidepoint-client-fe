import { Button, Card, Stack, TextField, Typography } from "@mui/material";
import { css } from "@emotion/react";
import logo from "@/password-logo.png";
import Image from "next/image";
import { useState } from "react";
import { emailRegex } from "@/utils/Regex";
import { LightColor } from "@/common/theme/colors";

export const PasswordRequestView = () => {
  const [email, setEmail] = useState("");
  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  const isFilled = email !== "";

  const isValidEmail = email.match(emailRegex);

  const getEmailHelperText = () => {
    if (!isFilled) return "필수 입력사항입니다.";
    if (!isValidEmail) return "이메일 형식에 맞게 입력해주세요.";

    return "";
  };

  return (
    <Stack css={sx.root}>
      <Card css={sx.box}>
        <div css={sx.title}>
          <Typography variant={"h5"}>{"비밀번호 재설정"}</Typography>
        </div>
        <Stack css={sx.boxInner}>
          <div css={sx.text}>
            <Typography variant={"body2"}>
              {
                "계정으로 사용하시는 이메일 주소를 입력하시면\n비밀번호를 설정하실 수 있는 메일을 전송해 드립니다."
              }
            </Typography>
          </div>

          <div css={sx.formBox}>
            <TextField
              css={sx.input}
              placeholder={"report@heumtax.com"}
              error={!isValidEmail}
              helperText={getEmailHelperText()}
              onChange={(e) => {
                handleEmailChange(e.target.value);
              }}
            />
            <Button
              variant="contained"
              disabled={!isValidEmail}
              css={sx.button}
            >
              {"비밀번호 재설정 메일 요청"}
            </Button>
          </div>
        </Stack>
      </Card>
      <Image css={sx.logo} src={logo} alt="logo" width={125} height={22} />
    </Stack>
  );
};

const sx = {
  root: css`
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;
    height: 100%;

    @media (max-width: 768px) {
      justify-content: flex-start;
    }
  `,
  box: css`
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin: 0 auto;
    width: 100%;
    max-width: 400px;
    height: 540px;
    align-items: center;

    @media (max-width: 768px) {
      width: 100%;
      margin-top: 40px;
    }
  `,
  title: css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-bottom: 1px solid ${LightColor.BorderColor2};
    height: 5rem;

    @media (max-width: 768px) {
      border-bottom: none;
    }
  `,
  boxInner: css`
    height: 100%;

    @media (max-width: 768px) {
      width: 100%;
    }
  `,
  text: css`
    margin-top: 84px;
    text-align: center;
  `,
  input: css``,
  formBox: css`
    display: flex;
    flex-direction: column;
    margin-top: 2.5rem;
    width: 100%;

    @media (max-width: 768px) {
      width: 100%;
    }
  `,
  button: css`
    margin-top: 1.5rem;
    width: 100%;
    padding: 1rem;
  `,
  logo: css`
    margin-top: 3rem;
  `,
};
