import { useState } from "react";

export const UseTermsForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const handleTitleChange = (value: string) => {
    setTitle(value);
  };
  const handleCotentChange = (value: string) => {
    setContent(value);
  };
  const handleCheckBox = (checked: boolean) => {
    setIsChecked(!checked);
  };
  const handleSubmit = () => {
    alert(`submit ${title}`);
  };
  const submitButtonDisabled = !title || !content;
  return {
    title,
    content,
    isChecked,
    handleTitleChange,
    handleCotentChange,
    handleCheckBox,
    handleSubmit,
    submitButtonDisabled,
  };
};
