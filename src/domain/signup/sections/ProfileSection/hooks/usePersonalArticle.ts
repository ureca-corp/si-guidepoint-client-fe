import { useState } from "react";

export const usePersonalArticle = () => {
  const [prefix, setPrefix] = useState("Mr");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [suffix, setSuffix] = useState("");

  const handleFirstNameChange = (v: string) => {
    setFirstName(v);
  };

  const handleMiddleNameChange = (v: string) => {
    setMiddleName(v);
  };

  const handleLastNameChange = (v: string) => {
    setLastName(v);
  };

  const handleSuffixChange = (v: string) => {
    setSuffix(v);
  };

  const handlePrefixChange = (v: string) => {
    setPrefix(v);
  };

  return {
    state: {
      prefix: {
        value: prefix,
        onChange: handlePrefixChange,
      },
      firstName: {
        value: firstName,
        onChange: handleFirstNameChange,
      },
      middleName: {
        value: middleName,
        onChange: handleMiddleNameChange,
      },
      lastName: {
        value: lastName,
        onChange: handleLastNameChange,
      },
      suffix: {
        value: suffix,
        onChange: handleSuffixChange,
      },
    },
  };
};
