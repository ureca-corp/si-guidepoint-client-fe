import { useState } from "react";

export const useContactArticle = () => {
  // state
  const [phone, setPhone] = useState("");
  const [alterPhone, setAlterPhone] = useState("");
  const [fax, setFax] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [im, setIm] = useState("");
  const [imType, setImType] = useState("");
  const [phoneOption, setPhoneOption] = useState("Mr");
  const [alterPhoneOption, setAlterPhoneOption] = useState("Mr");

  // functions
  const handlePhoneChange = (v: string) => {
    setPhone(v);
  };
  const handleAlterPhoneChange = (v: string) => {
    setAlterPhone(v);
  };

  const handlePhoneOptionChange = (v: string) => {
    setPhoneOption(v);
  };
  const handleAlterPhoneOptionChange = (v: string) => {
    setAlterPhoneOption(v);
  };

  const handleFaxChange = (v: string) => {
    setFax(v);
  };
  const handleEmailChange = (v: string) => {
    setEmail(v);
  };
  const handleConfirmEmailChange = (v: string) => {
    setConfirmEmail(v);
  };
  const handleImChange = (v: string) => {
    setIm(v);
  };
  const handleImTypeChange = (v: string) => {
    setImType(v);
  };
  return {
    state: {
      phone: {
        value: phone,
        onChange: handlePhoneChange,
        option: phoneOption,
        onOptionChange: handlePhoneOptionChange,
      },
      alterPhone: {
        value: alterPhone,
        onChange: handleAlterPhoneChange,
        option: alterPhoneOption,
        onOptionChange: handleAlterPhoneOptionChange,
      },
      fax: {
        value: fax,
        onChange: handleFaxChange,
      },
      email: {
        value: email,
        onChange: handleEmailChange,
      },
      confirmEamil: {
        value: confirmEmail,
        onChange: handleConfirmEmailChange,
      },
      im: {
        value: im,
        onChange: handleImChange,
      },
      imType: {
        value: imType,
        onChange: handleImTypeChange,
      },
    },
  };
};