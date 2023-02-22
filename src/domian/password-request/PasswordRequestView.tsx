import { Button, Input, Stack, TextField } from "@mui/material";
import { css } from "@emotion/react";
import logo from "@/password-logo.png";
import Image from "next/image";
import { useState } from "react";
import { emailRegex } from "@/utils/Regex";

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
      <Stack css={sx.box}>
        <div css={sx.title}>비밀번호 재설정</div>
        <Stack css={sx.boxInner}>
          <p css={sx.text}>
            계정으로 사용하시는 이메일 주소를 입력하시면 <br />
            비밀번호를 설정하실 수 있는 메일을 전송해 드립니다.
          </p>
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
            <Button disabled={!isValidEmail} css={sx.button}>
              비밀번호 재설정 메일 요청
            </Button>
          </form>
        </Stack>
      </Stack>
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
    margin: 0 auto;
    width: 750px;
    height: 540px;
    align-items: center;
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
      var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    --tw-shadow: 0 4px 10px rgba(165, 165, 165, 0.2);
    @media (max-width: 768px) {
      width: 100%;
      box-shadow: none;
    }
  `,
  title: css`
    color: #4d4e58;
    line-height: 28px;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-bottom: 1px solid rgb(241 242 245);
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
    color: #829098;
    font-size: 14px;
    text-align: center;
    line-height: 22px;
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
    background-color: rgb(77 78 88);
    color: white;
    padding: 1rem;
    font-size: 14px;
    line-height: 16px;
    &:disabled {
      --tw-bg-opacity: 1;
      background-color: rgb(202 205 216 / var(--tw-bg-opacity));
      color: #ffffff;
    }
    &:hover {
      background-color: rgb(77 78 88);
    }
  `,
  logo: css`
    margin-top: 3rem;
    @media (max-width: 768px) {
      margin-top: 0;
    }
  `,
};
