import {
  AreaOfExpertiseInput,
  ExpertiseHistoryInput,
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

export const ExpertisementInfoAtom = atom<ExpertiseHistoryInput>({
  key: "expertisementInfoState",
  default: {
    areaList: [],
    keywords: {
      boardCertifications: [],
      companyExperience: [],
      drugsAndTechnology: [],
      productExperience: [],
      researchInterests: [],
    },
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

export const KeywordExpertisementAtom = atom<KeywordsOfExpertiseInput>({
  key: "keywordExpertisementState",
  default: {
    boardCertifications: [],
    companyExperience: [],
    drugsAndTechnology: [],
    productExperience: [],
    researchInterests: [],
  },
});
