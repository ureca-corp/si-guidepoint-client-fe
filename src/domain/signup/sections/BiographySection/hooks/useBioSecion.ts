import { useState } from "react";
export const useBioSection = () => {
  const [text, setText] = useState("");
  const handleTextChange = (value: string) => {
    setText(value);
  };
  const [link, setLink] = useState("");
  const handleLinkChange = (v: string) => {
    setLink(v);
  };
  return { text, handleTextChange, link, handleLinkChange };
};
