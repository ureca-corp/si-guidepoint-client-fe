import { MediaItem } from "@/common/types/item.type";
import { ResidenceInfoAtom } from "@/recoil/Profile/residence.atom";
import { useCallback, useState } from "react";
import { useRecoilValue } from "recoil";
export const useBioSection = () => {
  const [biography, setBiography] = useState("");
  const [link, setLink] = useState("");
  const [compliance, setCompliance] = useState("");

  const data = useRecoilValue(ResidenceInfoAtom);

  // state
  const [itemCount, setItemCount] = useState(1);
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([
    {
      id: 0,
      sns: "",
      address: "",
    },
  ]);

  const handleBiographyChange = (v: string) => {
    setBiography(v);
  };

  const handleLinkChange = (v: string) => {
    setLink(v);
  };
  const handleComplianceChange = (v: string) => {
    setCompliance(v);
  };

  const remainedTextCount = useCallback(() => {
    return 2000 - biography.length;
  }, [biography]);

  const onResumeUpload = () => {
    console.log("click");
  };
  const onHyperlinkUpload = () => {
    console.log("click");
  };

  const onSubmit = () => {
    console.log(data);
  };

  // 1, sns
  const handleSnsChange = (id: number, v: string) => {
    const findIndex = mediaItems.findIndex((item) => item.id === id);
    const copiedItems = [...mediaItems];

    copiedItems[findIndex].sns = v;
    setMediaItems(copiedItems);
  };

  // 2. address
  const handleAddressChange = (id: number, v: string) => {
    const findIndex = mediaItems.findIndex((item) => item.id === id);
    const copiedItems = [...mediaItems];

    copiedItems[findIndex].address = v;
    setMediaItems(copiedItems);
  };

  // button functions
  const onAddItem = useCallback(() => {
    setItemCount(itemCount + 1);
    setMediaItems((old) => [
      ...old,
      {
        id: itemCount,
        sns: "",
        address: "",
      },
    ]);
  }, [itemCount]);

  const onDeleteItem = (itemId: number) => {
    const remainItemList = mediaItems.filter((it) => it.id !== itemId);
    setMediaItems(remainItemList);
  };

  const isButtonVisible = mediaItems.length <= 4;

  return {
    state: {
      biography: {
        value: biography,
        onChange: handleBiographyChange,
        remainedTextCount: remainedTextCount,
      },
      link: {
        value: link,
        onChange: handleLinkChange,
      },
      compliance: {
        value: compliance,
        onChange: handleComplianceChange,
      },
      mediaItemState: {
        list: mediaItems,
        onChange: {
          sns: handleSnsChange,
          address: handleAddressChange,
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
        onUploadClick: onResumeUpload,
      },
      submit: { onSubmit: onSubmit },
    },
  };
};
