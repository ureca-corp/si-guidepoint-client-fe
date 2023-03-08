import { AssistantInfoInput } from "@/common/types/profile.type";
import { atom } from "recoil";

export const AssistantInfoAtom = atom<AssistantInfoInput[]>({
  key: "assistantInfoInput",
  default: [
    { name: "", phone: "", email: "" },
    { name: "", phone: "", email: "" },
  ],
});
