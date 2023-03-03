import { PagenationMetaData } from "@/common/api-utils";

export interface TermsFetchResponse<T> {
  terms: {
    metaData: PagenationMetaData;
    items: T[];
  };
}
