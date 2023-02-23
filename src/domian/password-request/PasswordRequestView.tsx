import {
  Button,
  Card,
  Input,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { css } from "@emotion/react";
import logo from "@/password-logo.png";
import Image from "next/image";
import { useState } from "react";
import { emailRegex } from "@/utils/Regex";
import { LightColor } from "@/common/theme/colors";

export const PasswordRequestView = () => {
  const [email, setEmail] = useState("");
  const emailCheck = (value: string) => {
    setEmail(value);
  };

  const isFilled = email !== "";

  const isValidEmail = email.match(emailRegex);

  const handleEmail = () => {
    if (!isFilled) return "필수 입력사항입니다.";
    else if (!isValidEmail) return "이메일 형식에 맞게 입력해주세요.";
    else return "";
  };
  const emailHelperWarning = handleEmail();
  return (
    <Stack css={sx.root}>
      <Card css={sx.box}>
        <div css={sx.title}>
          <Typography variant={"h5"}>{"비밀번호 재설정"}</Typography>
        </div>
        <Stack css={sx.boxInner}>
          <div css={sx.text}>
            <Typography variant={"body2"}>
              계정으로 사용하시는 이메일 주소를 입력하시면 <br />
              비밀번호를 설정하실 수 있는 메일을 전송해 드립니다.
            </Typography>
          </div>
          <form
            css={sx.formBox}
            action="submit
          "
          >
            <TextField
              css={sx.input}
              placeholder="report@heumtax.com"
              error={!isValidEmail}
              // helperText={isFilled ? "" : "필수입력사항 입니다."}
              helperText={emailHelperWarning}
              onChange={(e) => {
                emailCheck(e.target.value);
              }}
            />
            <Button
              variant="contained"
              disabled={!isValidEmail}
              css={sx.button}
            >
              비밀번호 재설정 메일 요청
            </Button>
          </form>
        </Stack>
      </Card>
      <Image css={sx.logo} src={logo} alt="logo" width={125} height={22} />
    </Stack>
  );
};

const sx = {
  root: css`
    align-items: center;
    justify-content: center;
    height: 90vh;
    @media (max-width: 768px) {
      justify-content: flex-start;
    }
  `,
  box: css`
    display: flex;
    flex-direction: column;

    margin: 0 auto;
    width: 750px;
    height: 540px;
    align-items: center;

    @media (max-width: 768px) {
      width: 100%;
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
    width: 358px;
    & .MuiInputBase-input {
      height: 18px;
    }
    @media (max-width: 768px) {
      width: 100%;
    }
  `,
  button: css`
    margin-top: 1.5rem;
    width: 100%;
    /* background-color: rgb(77 78 88); */
    /* color: white; */
    padding: 1rem;
    /* font-size: 14px;
    line-height: 16px;
    &:disabled {
      --tw-bg-opacity: 1;
      background-color: rgb(202 205 216 / var(--tw-bg-opacity));
      color: #ffffff;
    }
    &:hover {
      background-color: rgb(77 78 88);
    } */
  `,
  logo: css`
    margin-top: 3rem;
    @media (max-width: 768px) {
      margin-top: 0;
    }
  `,
};
