import { useState } from "react";

export const useBaseForm = (defaultId: string = "", defaultPw: string = "") => {
  const [id, setId] = useState(defaultId);
  const handleIdChange = (v: string) => {
    setId(v);
    handleCancel;
  };

  const [pw, setPw] = useState(defaultPw);
  const handlePwChange = (v: string) => {
    setPw(v);
  };

  const handleCancel = () => {
    alert("cancel");
    handlePwChange;
  };

  const submitButtonDisabled = !id || !pw;
  const handleSubmit = () => {
    alert("submit");
    handleCancel;
  };

  return {
    id,
    handleIdChange,
    pw,
    handlePwChange,
    handleCancel,
    submitButtonDisabled,
    handleSubmit,
  };
};
