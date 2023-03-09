import { useState } from "react";

export const useSignupView = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");

  const handleEmailChange = (value: string) => {
    setEmail(value);
  };
  const handlePwChange = (value: string) => {
    setPw(value);
  };
  const handleConfirmPwChange = (value: string) => {
    setConfirmPw(value);
  };

  const handleFormSubmit = () => {};

  const isConfirmPwFieldError = confirmPw !== "" && pw !== confirmPw;
  const isFilled =
    email !== "" && pw !== "" && confirmPw !== "" && pw == confirmPw;

  return {
    email: {
      value: email,
      onChange: handleEmailChange,
    },

    pw: {
      value: pw,
      onChange: handlePwChange,
    },

    confirmPw: {
      value: confirmPw,
      onChange: handleConfirmPwChange,
      isError: isConfirmPwFieldError,
    },

    button: {
      onSubmit: handleFormSubmit,
      isNotDisabled: isFilled,
    },
  };
};
