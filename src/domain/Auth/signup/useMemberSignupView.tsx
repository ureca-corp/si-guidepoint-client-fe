import { useCreateMember } from "@/infra/member/hooks/useCreateMember";
import { emailRegex, passwordRegex } from "@/utils/Regex";
import { useCallback, useState } from "react";

export const useMemberSignupView = () => {
  // state
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");

  // api
  const { createMember, loading } = useCreateMember();

  // functions
  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  const handlePwChange = (value: string) => {
    setPw(value);
  };

  const handleConfirmPwChange = (value: string) => {
    setConfirmPw(value);
  };

  const handleFormSubmit = useCallback(() => {
    createMember({ variables: { email: email, password: pw } });
  }, [createMember, email, pw]);

  // error state
  const isEmailRegexRight = emailRegex.test(email);
  const isPwRegexRight = passwordRegex.test(pw);
  const isConfirmPwFieldError = confirmPw !== "" && pw !== confirmPw;
  const isButtomActive =
    email !== "" &&
    pw !== "" &&
    confirmPw !== "" &&
    pw == confirmPw &&
    isEmailRegexRight &&
    isPwRegexRight;

  return {
    email: {
      value: email,
      onChange: handleEmailChange,
      isError: !isEmailRegexRight,
    },
    pw: {
      value: pw,
      onChange: handlePwChange,
      isError: !isPwRegexRight,
    },
    confirmPw: {
      value: confirmPw,
      onChange: handleConfirmPwChange,
      isError: isConfirmPwFieldError,
    },
    button: {
      onSubmit: handleFormSubmit,
      isNotDisabled: isButtomActive,
    },
    fetchState: {
      loading: loading,
    },
  };
};
