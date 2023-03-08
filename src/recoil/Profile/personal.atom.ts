import { PersonalInfoInput } from "@/common/types/profile.type";
import { atom } from "recoil";

export const PersonalInfoAtom = atom<PersonalInfoInput>({
  key: "personalInfoState",
  default: {
    firstName: "",
    lastName: "",
    middleInitial: "",
    prefix: "",
    suffix: "",
  },
});
