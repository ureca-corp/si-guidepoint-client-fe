import { useState } from "react";

export const useLoginView = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const handleEmailChange = (value: string) => {
    setEmail(value);
  };
  const handlePwChange = (value: string) => {
    setPw(value);
  };
  const isFilled = email !== "" && pw !== "";

  return {
    email,
    handleEmailChange,
    pw,
    handlePwChange,
    isFilled,
  };
};
