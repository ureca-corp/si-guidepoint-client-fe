import { UseDialogOpen } from "@/common/hooks";
import LocalStorage from "@/common/LocalStorage/LocalStorage";
import { ApolloError, gql, useLazyQuery } from "@apollo/client";
import { useRouter } from "next/router";

type QueryResponse = {
  user: User;
  accessToken: String;
};

type User = {
  userId: number;
  email: string;
  role: string;
};

const FETCH_LOGIN = gql`
  query ($email: String!, $password: String!) {
    login(loginInput: { email: $email, password: $password }) {
      user {
        userId
        email
        role
      }
      accessToken
    }
  }
`;

export const useMemberLogin = () => {
  const router = useRouter();
  const { openState } = UseDialogOpen();

  const [login, { data, loading }] = useLazyQuery<QueryResponse>(FETCH_LOGIN, {
    onError: (err: ApolloError) => {
      openState.onErrorOpen("아이디 혹은 비밀번호가 일치하지 않습니다.");
    },
    onCompleted: (res: any) => {
      LocalStorage.setItem("accessToken", res.login.accessToken);
      LocalStorage.setItem("userId", res.login.user.userId);
      router.push("/signup");
    },
  });
  return { login, data, loading };
};
