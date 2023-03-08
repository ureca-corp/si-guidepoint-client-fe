import { gql, useQuery } from "@apollo/client";

type props = {
  page: number;
  size: number;
};

export const useFetchTerms = (p?: props) => {
  // default
  const page = p?.page ?? 1;
  const size = p?.size ?? 10;

  const FETCH_TERMS = gql`
    query {
      terms(params: { pageRequest: { page: 1, size: 10 } }) {
        metaData {
          offset
          pageSize
          pageNumber
          totalPageCount
          itemCount
          totalItemCount
          isFirst
          isLast
        }
        items {
          id
          title
          content
          isRequired
          createdAt
          updatedAt
          deletedAt
        }
      }
    }
  `;

  return useQuery<any>(FETCH_TERMS);
};
