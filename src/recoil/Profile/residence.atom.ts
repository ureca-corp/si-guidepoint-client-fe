import { atom } from "recoil";

export interface ResidenceAddressInput {
  city: string;
  country: string;
  postalCode: string;
  street1: string;
  street2: string;
  street3: string;
  timeZone: string;
}

export const ResidenceInfoAtom = atom<ResidenceAddressInput>({
  key: "residenceInfoState",
  default: {
    street1: "",
    street2: "",
    street3: "",
    city: "",
    country: "",
    postalCode: "",
    timeZone: "",
  },
});
