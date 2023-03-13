import { useSessionUser } from "@/common/auth/session/application";
import { UserRouterPath } from "@/common/router/RouterPath";
import { useMemberLogin } from "@/infra/member/hooks/useMemberLogin";
import { emailRegex } from "@/utils/Regex";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

export const useLoginView = () => {
  // router
  const router = useRouter();
  const routeHome = () => router.replace(UserRouterPath.Profile);

  //session
  const { setUser, removeUser } = useSessionUser();

  // login 진입시 세션제거
  useEffect(() => {
    removeUser();
  }, []);

  // state
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  // api
  const { login, loading, data } = useMemberLogin();

  // functions
  const handleEmailChange = (value: string) => {
    setEmail(value);
  };
  const handlePwChange = (value: string) => {
    setPw(value);
  };

  // error state
  const isEmailRegexRight = emailRegex.test(email);
  const isFilled = email !== "" && pw !== "" && isEmailRegexRight;

  // login
  const onSubmit = () => {
    login({ variables: { email: email, password: pw } });
  };

  // when login successed
  const handleLoginSuccess = useCallback(() => {
    if (data) {
      const { user, accessToken } = data.login;
      setUser({ userId: user.userId, email: user.email, accessToken });

      routeHome();
    }
  }, [data]);

  useEffect(() => {
    handleLoginSuccess();
  }, [handleLoginSuccess]);

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
