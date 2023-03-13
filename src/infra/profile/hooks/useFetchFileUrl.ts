import LocalStorage from "@/common/LocalStorage/LocalStorage";
import {
  BiographyTextfieldsInfoAtom,
  ResumeFile,
} from "@/recoil/Profile/biography.atom";
import { ApolloError, gql, useLazyQuery } from "@apollo/client";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { FileUpload } from "./useUploadFileHook";

type QueryResponse = {
  requestFileUploadSignedUrl: string;
};
const FETCH_FILE_URL = gql`
  query ($filename: String!) {
    requestFileUploadSignedUrl(fileKey: $filename)
  }
`;

export const useFetchFileUrl = () => {
  const accessToken = LocalStorage.getItem("accessToken");
  const file = useRecoilValue(ResumeFile);
  const setBiographyInfo = useSetRecoilState(BiographyTextfieldsInfoAtom);

  const [requeryFileUrl, { data }] = useLazyQuery<QueryResponse>(
    FETCH_FILE_URL,
    {
      context: {
        headers: {
          authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      },
      onError: (err: ApolloError) => {
        console.log(err);
      },
      onCompleted: (res: QueryResponse) => {
        FileUpload(res.requestFileUploadSignedUrl, file!);
        setBiographyInfo((old) => ({
          ...old,
          resumeLink: res.requestFileUploadSignedUrl,
        }));
      },
    }
  );
  return { requeryFileUrl, data };
};
