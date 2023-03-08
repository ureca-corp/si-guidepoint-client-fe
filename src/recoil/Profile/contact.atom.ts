import { ContactInfoInput } from "@/common/types/profile.type";
import { atom } from "recoil";

export const ContactInfoAtom = atom<ContactInfoInput>({
  key: "contactInfoState",
  default: {
    phoneInfo: {
      number: "",
      type: "",
    },
    alternatePhoneInfo: {
      number: "",
      type: "",
    },
    fax: "",
    email: "",
    confirmEmail: "",
    instanceMessengerInfo: {
      address: "",
      type: "",
    },
  },
});
