import { useState } from "react";

export const UseConflictArticle = () => {
  const [text, setText] = useState("");
  const handleTextChange = (value: string) => {
    setText(value);
  };
  return { text, handleTextChange };
};
