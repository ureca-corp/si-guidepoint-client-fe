import {
  CustomEmploymentHistoryItemInput,
  EmploymentHistoryItemInput,
} from "@/common/types/profile.type";
import { atom, selector } from "recoil";

const currYear = new Date().getFullYear().toString();

export const EmploymentItemAtom = atom<CustomEmploymentHistoryItemInput[]>({
  key: "employmentInfoState",
  default: [
    {
      id: 0,
      isCurrentlyEmployed: false,
      employerName: "",
      jobTitle: "",
      startedMonth: "01",
      startedYear: currYear,
      endedMonth: "01",
      endedYear: currYear,
    },
  ],
});

export const EmploymentExperienceAtom = atom<string>({
  key: "employmentExperienceState",
  default: "",
});

export const EmploymentInfoAtom = selector({
  key: "employmenttTemp",
  get: ({ get }) => {
    const employmentItems = get(EmploymentItemAtom);
    const experienceYear = get(EmploymentExperienceAtom);

    const selectedExperienceYear = (year: string) => {
      switch (year) {
        case "1-5":
          return "Between1And5";
        case "6-10":
          return "Between6And10";
        case "11-15":
          return "Between11And15";
        case "16+":
          return "Over16";
        default:
          return "";
      }
    };

    const getDateFormattedItems = (
      items: CustomEmploymentHistoryItemInput[]
    ) => {
      const list: EmploymentHistoryItemInput[] = [];
      items.map((it) =>
        list.push({
          id: it.id,
          isCurrentlyEmployed: it.isCurrentlyEmployed,
          employerName: it.employerName,
          endedAt: `${it.endedYear}-${it.endedMonth}`,
          jobTitle: it.jobTitle,
          startedAt: `${it.startedYear}-${it.startedMonth}`,
        })
      );

      return list;
    };

    return {
      items: getDateFormattedItems(employmentItems),
      yearsOfExperience: selectedExperienceYear(experienceYear),
    };
  },
});
