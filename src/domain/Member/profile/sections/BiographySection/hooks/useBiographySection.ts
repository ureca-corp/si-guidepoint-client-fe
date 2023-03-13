import { useCreateProfile } from "@/infra/profile/hooks/useCreateProfile";
import { useFetchFileUrl } from "@/infra/profile/hooks/useFetchFileUrl";
import {
  BiographyTextfieldsInfoAtom,
  MediaAtom,
  ResumeFile,
  ResumeFilenameWithTimestamp,
} from "@/recoil/Profile/biography.atom";
import { ProfileIntoAtom } from "@/recoil/Profile/profile.atom";
import { ProfileReadonlyAtom } from "@/recoil/Profile/readonly/readonly.atom";
import { useCallback } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
export const useBioSection = () => {
  // isReadOnly
  const isReadOnly = useRecoilValue(ProfileReadonlyAtom);

  // state
  const [biographyInfos, setBiographyInfos] = useRecoilState(
    BiographyTextfieldsInfoAtom
  );

  const [resumeFile, setResumeFile] = useRecoilState(ResumeFile);
  const filename = useRecoilValue(ResumeFilenameWithTimestamp);

  const [medias, setMedias] = useRecoilState(MediaAtom);
  const mediaTemp = [...medias];

  const results = useRecoilValue(ProfileIntoAtom);

  // api
  const { createMember } = useCreateProfile();

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
    setResumeFile(e.target.files[0]);
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
  const isButtonVisible = medias.length <= 4 && !isReadOnly;
  const onSubmit = () => {
    console.log(JSON.stringify(results));
    createMember({ variables: { createProfileInput: results } });
  };

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
      isReadOnly: isReadOnly,
      submit: { onSubmit: onSubmit },
    },
  };
};
