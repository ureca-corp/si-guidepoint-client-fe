import { useState } from "react";

export const UseLinkArticle = () => {
  const [link, setLink] = useState("");
  const handleLinkChange = (v: string) => {
    setLink(v);
  };
  return {
    link,
    handleLinkChange,
  };
};
