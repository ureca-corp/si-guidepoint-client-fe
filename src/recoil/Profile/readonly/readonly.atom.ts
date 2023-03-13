import { atom } from "recoil";

export const ProfileReadonlyAtom = atom<boolean>({
  key: "ProfileReadonlyState",
  default: true,
});
