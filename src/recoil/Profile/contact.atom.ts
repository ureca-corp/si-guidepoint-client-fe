import { atom } from "recoil";

export interface PhoneInfo {
  number: string;
  type: string;
}
export interface InstanceMessengerInfoInput {
  address: string;
  type: string;
}

export interface ContactInfoInput {
  phoneInfo: PhoneInfo;
  alternatePhoneInfo: PhoneInfo;
  confirmEmail: string;
  email: string;
  fax: string;
  instanceMessengerInfo: InstanceMessengerInfoInput;
}

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
