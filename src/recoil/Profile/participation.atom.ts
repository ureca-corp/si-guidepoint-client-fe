import { atom, selector } from "recoil";

interface ParticipationBooleanType {
  phoneConsultation: boolean;
  inperson: boolean;
  surveys: boolean;
  quickPoll: boolean;
  expert: boolean;
  engagement: boolean;
}
export const ParticipationBooleanAtom = atom<ParticipationBooleanType>({
  key: "participationBooleanState",
  default: {
    phoneConsultation: false,
    inperson: false,
    surveys: false,
    quickPoll: false,
    expert: false,
    engagement: false,
  },
});

export const ParticipationInfoAtom = atom<string[]>({
  key: "participationInfoState",
  default: [],
});
