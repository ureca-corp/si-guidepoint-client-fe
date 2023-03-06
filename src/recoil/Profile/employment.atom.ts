import { atom } from "recoil";

export interface EmploymentHistoryItemInput {
  id: number;
  isCurrentlyEmployed: boolean;
  employerName: string;
  endedAt: string;
  jobTitle: string;
  startedAt: string;
}

export enum YearsOfExperience {
  Between1And5 = "Between1And5",
  Between6And10 = "Between6And10",
  Between11And15 = "Between11And15",
  Over16 = "Over16",
}

export type EmploymentHistoryInput = {
  items: EmploymentHistoryItemInput[];
  yearsOfExperience: YearsOfExperience;
};

export const EmploymentInfoAtom = atom<EmploymentHistoryItemInput[]>({
  key: "employmentInfoState",
  default: [
    {
      id: 0,
      isCurrentlyEmployed: false,
      employerName: "",
      endedAt: "",
      jobTitle: "",
      startedAt: "",
    },
  ],
});
