import {
  AreaOfExpertiseInput,
  CustomKeywordsOfExpertiseInput,
  KeywordsOfExpertiseInput,
} from "@/common/types/profile.type";
import { atom, selector } from "recoil";

export const temp = selector({
  key: "expertisementTemp",
  get: ({ get }) => {
    const areaOfData = get(AreaOfExpertiseAtom);
    const keywordsOfData = get(KeywordExpertisementAtom);

    return {
      areaList: areaOfData,
      keywords: keywordsOfData,
    };
  },
});

export const AreaOfExpertiseAtom = atom<AreaOfExpertiseInput[]>({
  key: "areaOfExpertiseState",
  default: [
    {
      id: 0,
      sector: "",
      industry: "",
      role: "",
    },
  ],
});

export const CustomKeywordExpertisementAtom =
  atom<CustomKeywordsOfExpertiseInput>({
    key: "customKeywordExpertisementState",
    default: {
      boardCertifications: "",
      companyExperience: "",
      drugsAndTechnology: "",
      productExperience: "",
      researchInterests: "",
    },
  });

export const KeywordExpertisementAtom = selector({
  key: "keywordExpertisementState",
  get: ({ get }) => {
    const keywordExpertisementData = get(CustomKeywordExpertisementAtom);

    const handleSplitData = (data: string) => {
      return data.split(",");
    };

    return {
      boardCertifications: handleSplitData(
        keywordExpertisementData.boardCertifications
      ),
      companyExperience: handleSplitData(
        keywordExpertisementData.companyExperience
      ),
      drugsAndTechnology: handleSplitData(
        keywordExpertisementData.drugsAndTechnology
      ),
      productExperience: handleSplitData(
        keywordExpertisementData.productExperience
      ),
      researchInterests: handleSplitData(
        keywordExpertisementData.researchInterests
      ),
    };
  },
});
