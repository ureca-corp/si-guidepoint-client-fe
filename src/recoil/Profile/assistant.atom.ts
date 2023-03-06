import { atom, selector } from "recoil";

export interface AssistantInfoInput {
  name: string;
  phone: string;
  email: string;
}

export const AssistantInfoAtom = atom<AssistantInfoInput[]>({
  key: "assistantInfoInput",
  default: [
    { name: "", phone: "", email: "" },
    { name: "", phone: "", email: "" },
  ],
});
