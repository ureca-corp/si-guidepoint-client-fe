import { useFetchFileUrl } from "@/infra/profile/hooks/useFetchFileUrl";
import {
  BiographyInfoAtom,
  MediaAtom,
  ResumeFile,
  ResumeFilenameWithTimestamp,
} from "@/recoil/Profile/biography.atom";
import { useCallback } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
export const useBioSection = () => {
  // state
  const [biographyInfos, setBiographyInfos] = useRecoilState(BiographyInfoAtom);

  const [resumeFile, setResumetFile] = useRecoilState(ResumeFile);
  const filename = useRecoilValue(ResumeFilenameWithTimestamp);

  const [medias, setMedias] = useRecoilState(MediaAtom);
  const mediaTemp = [...medias];

  // file upload function
  const { requeryFileUrl, data } = useFetchFileUrl();

  const handleBiographyChange = (v: string) => {
    setBiographyInfos((old) => ({ ...old, biography: v }));
  };
  const handleLinkChange = (v: string) => {
    setBiographyInfos((old) => ({ ...old, linkedInProfileLink: v }));
  };
  const handleComplianceChange = (v: string) => {
    setBiographyInfos((old) => ({ ...old, complianceConflicts: v }));
  };

  const remainedTextCount = useCallback(() => {
    return 2000 - biographyInfos.biography.length;
  }, [biographyInfos.biography]);

  // file upload
  const resumeUploadHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
      }
    };

    if (!e.target.files) {
      return;
    }
    reader.readAsDataURL(e.target.files[0]);
    setResumetFile(e.target.files[0]);
    requeryFileUrl({ variables: { filename } });

    e.target.value = "";
  };

  // 1, type
  const handleTypeChange = (id: number, v: string) => {
    mediaTemp[id] = { ...mediaTemp[id], type: v };
    setMedias(mediaTemp);
  };

  // 2. link (address)
  const handleAddressChange = (id: number, v: string) => {
    mediaTemp[id] = { ...mediaTemp[id], link: v };
    setMedias(mediaTemp);
  };

  // button functions
  const onAddItem = useCallback(() => {
    setMedias((old) => [
      ...old,
      {
        type: "",
        link: "",
      },
    ]);
  }, [setMedias]);

  const onDeleteItem = (id: number) => {
    const temp = [...medias];
    temp.splice(id, 1);

    setMedias(temp);
  };
  const isButtonVisible = medias.length <= 4;
  const onSubmit = () => {};

  return {
    state: {
      biography: {
        value: biographyInfos.biography,
        onChange: handleBiographyChange,
        remainedTextCount: remainedTextCount,
      },
      link: {
        value: biographyInfos.linkedInProfileLink,
        onChange: handleLinkChange,
      },
      compliance: {
        value: biographyInfos.complianceConflicts,
        onChange: handleComplianceChange,
      },
      mediaItemState: {
        list: medias,
        onChange: {
          type: handleTypeChange,
          link: handleAddressChange,
        },
        addButton: {
          isVisible: isButtonVisible,
          onClick: onAddItem,
        },
        deleteButton: {
          onClick: onDeleteItem,
        },
      },
      resume: {
        file: resumeFile?.name ?? "",
        onClick: resumeUploadHandler,
      },
      submit: { onSubmit: onSubmit },
    },
  };
};
