import { useCallback, useState } from "react";
export const useBioSection = () => {
  const [biography, setBiography] = useState("");
  const [link, setLink] = useState("");
  const [compliance, setCompliance] = useState("");

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
    console.log("click");
  };

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
      hyperlink: {
        onUploadClick: onHyperlinkUpload,
      },
      resume: {
        onUploadClick: onResumeUpload,
      },
      submit: { onSubmit: onSubmit },
    },
  };
};
