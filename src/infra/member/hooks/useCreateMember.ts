import { UseDialogOpen } from "@/common/hooks";
import { ApolloError, gql, useMutation } from "@apollo/client";

type QueryResponse = {
  id: number;
  email: string;
};

const ADD_MEMBER = gql`
  mutation CreateMember($email: String!, $password: String!) {
    createMember(createMemberInput: { email: $email, password: $password }) {
      id
      email
    }
  }
`;

export const useCreateMember = () => {
  const { openState } = UseDialogOpen();

  const [createMember, { loading }] = useMutation<QueryResponse>(ADD_MEMBER, {
    onError: (err: ApolloError) => {
      if (err.message == "이미 사용중인 이메일 입니다.") {
        openState.onErrorOpen(err.message);
      }
    },

    onCompleted: (res: QueryResponse) => {
      openState.onConfirmOpen("회원가입이 완료되었습니다.", "/login");
    },
  });
  return { createMember, loading };
};
