import { useMemberLogin } from "@/infra/member/hooks/useMemberLogin";
import { emailRegex } from "@/utils/Regex";
import { useState } from "react";

export const useLoginView = () => {
  // state
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  // api
  const { login, loading } = useMemberLogin();

  // functions
  const handleEmailChange = (value: string) => {
    setEmail(value);
  };
  const handlePwChange = (value: string) => {
    setPw(value);
  };

  const onSubmit = () => {
    login({ variables: { email: email, password: pw } });
  };

  // error state
  const isEmailRegexRight = emailRegex.test(email);
  const isFilled = email !== "" && pw !== "" && isEmailRegexRight;

  return {
    email: {
      value: email,
      onChange: handleEmailChange,
      isError: !isEmailRegexRight,
    },
    pw: {
      value: pw,
      onChange: handlePwChange,
    },
    buttonState: {
      disabled: !isFilled,
      onSubmit: onSubmit,
    },
    fetchState: {
      loading: loading,
    },
  };
};
