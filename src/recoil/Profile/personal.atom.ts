import { atom, selector } from "recoil";

export interface PersonalInfoInput {
  firstName: string;
  lastName: string;
  middleInitial: string;
  prefix: string;
  suffix: string;
}

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
