import { BiographyInfoAtom, ResumeFile } from "@/recoil/Profile/biography.atom";
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
  const file = useRecoilValue(ResumeFile);
  const setBiographyInfo = useSetRecoilState(BiographyInfoAtom);

  const [requeryFileUrl, { data }] = useLazyQuery<QueryResponse>(
    FETCH_FILE_URL,
    {
      context: {
        headers: {
          authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImVtYWlsIjoiYXNkQGdtYWlsLmNvbSIsInJvbGUiOiJnZW5lcmFsIiwiaWF0IjoxNjc4MjU4MzY4fQ.PpnC_MjVxpRAkOUgy7ACbHj777bLKhJNuT_RHpsAHuE`,
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
