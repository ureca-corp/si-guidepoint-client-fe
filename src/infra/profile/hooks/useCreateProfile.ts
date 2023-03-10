import { UseDialogOpen } from "@/common/hooks";
import LocalStorage from "@/common/LocalStorage/LocalStorage";
import { CreateProfileInput } from "@/common/types/profile.type";
import { gql, ApolloError, useMutation } from "@apollo/client";

type QueryResponse = {
  id: number;
};

const CREATE_PROFILE = gql`
  mutation CreateProfileOwn($createProfileInput: CreateProfileInput!) {
    createProfileOwn(createProfileInput: $createProfileInput) {
      id
    }
  }
`;

export const useCreateProfile = () => {
  const { openState } = UseDialogOpen();
  const accessToken = LocalStorage.getItem("accessToken");
  const [createMember, { loading }] = useMutation<QueryResponse>(
    CREATE_PROFILE,
    {
      context: {
        headers: {
          authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      },
      onError: (err: ApolloError) => {
        console.log(err);
        if (err.message == "이미 작성된 프로필이 존재합니다.") {
          return openState.onErrorOpen(err.message);
        }
        return openState.onErrorOpen("에러가 발생했습니다.");
      },

      onCompleted: (res: QueryResponse) => {
        console.log(res);
      },
    }
  );
  return { createMember, loading };
};
