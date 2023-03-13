import { UseDialogOpen } from "@/common/hooks";
import { ApolloError, gql, useLazyQuery } from "@apollo/client";

type QueryResponse = {
  login: {
    user: User;
    accessToken: string;
  };
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
  const { openState } = UseDialogOpen();

  const [login, { data, loading }] = useLazyQuery<QueryResponse>(FETCH_LOGIN, {
    onError: (err: ApolloError) => {
      openState.onErrorOpen("아이디 혹은 비밀번호가 일치하지 않습니다.");
    },
  });
  return { login, data, loading };
};
