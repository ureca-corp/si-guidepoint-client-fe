import { useState } from "react";

export const useAssistantArticle = () => {
  // state
  const [assist1Name, setAssist1Name] = useState("");
  const [assist1Email, setAssist1Email] = useState("");

  const [assist2Name, setAssist2Name] = useState("");
  const [assist2Email, setAssist2Email] = useState("");

  const [assist1Checked, setAssist1Checked] = useState(false);
  const [assist2Checked, setAssist2Checked] = useState(false);

  // functions
  const handleAsssist1NameChange = (v: string) => {
    setAssist1Name(v);
  };

  const handleAsssist1EmailChange = (v: string) => {
    setAssist1Email(v);
  };

  const handleAsssist2NameChange = (v: string) => {
    setAssist2Name(v);
  };

  const handleAsssist2EmailChange = (v: string) => {
    setAssist2Email(v);
  };

  const handleAssist1Change = (v: boolean) => {
    setAssist1Checked(v);
  };

  const handleAssist2Change = (v: boolean) => {
    setAssist2Checked(v);
  };

  return {
    state: {
      assist1: {
        name: assist1Name,
        onNameChange: handleAsssist1NameChange,
        email: assist1Email,
        onEmailChange: handleAsssist1EmailChange,
        checked: assist1Checked,
        onCheckChange: handleAssist1Change,
      },
      assist2: {
        name: assist2Name,
        onNameChange: handleAsssist2NameChange,
        email: assist2Email,
        onEmailChange: handleAsssist2EmailChange,
        checked: assist2Checked,
        onCheckChange: handleAssist2Change,
      },
    },
  };
};
