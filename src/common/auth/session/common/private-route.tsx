import { useRouter } from "next/router";
import React, { ReactNode, useEffect, useState } from "react";
import { SessionKey } from ".";

// Login 세션 체크 후 라우팅
export const PrivateRoute = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const router = useRouter();
  const [isTokenValid, setTokenValid] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const accessToken = sessionStorage.getItem(SessionKey.User);

      if (!accessToken) {
        router.replace("/login");
        return;
      }

      setTokenValid(true);
    }
  }, []);

  return isTokenValid ? <>{children}</> : <></>;
};
