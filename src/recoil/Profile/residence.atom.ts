import { ResidenceAddressInput } from "@/common/types/profile.type";
import { atom } from "recoil";

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
