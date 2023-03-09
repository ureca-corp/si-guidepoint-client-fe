import { Misc, SocialMediaProfile } from "@/common/types/profile.type";
import { atom, selector } from "recoil";

export const BiographyInfoAtom = atom<Misc>({
  key: "biographyInfoState",
  default: {
    biography: "",
    complianceConflicts: "",
    linkedInProfileLink: "",
    resumeLink: "",
  },
});

export const MediaAtom = atom<SocialMediaProfile[]>({
  key: "mediaState",
  default: [],
});

export const ResumeFile = atom<File | null>({
  key: "resumeFileState",
  default: null,
});

export const ResumeFilenameAtom = atom<string>({
  key: "resumeFilenameState",
  default: "",
});

export const ResumeFilenameWithTimestamp = selector({
  key: "resumeFilenameStateWithTimestamp",
  get: ({ get }) => {
    const file = get(ResumeFile);
    const filename = file ? file.name : "";
    const timestamp = new Date().getTime();

    return `${timestamp}_${filename}`;
  },
});

export const ResumeS3HoloderAtom = atom<string>({
  key: "resumeS3",
  default: "",
});
