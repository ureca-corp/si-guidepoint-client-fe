import { AssistantInfoAtom } from "@/recoil/Profile/assistant.atom";
import { useRecoilState } from "recoil";

export const useAssistantArticle = () => {
  // state
  const [assistantInfo, setAssistantInfo] = useRecoilState(AssistantInfoAtom);
  const temp = [...assistantInfo];

  // functions
  const handleAsssist1NameChange = (v: string) => {
    temp[0] = { ...temp[0], name: v };
    setAssistantInfo(temp);
  };

  const handleAsssist1PhoneChange = (v: string) => {
    temp[0] = { ...temp[0], phone: v };
    setAssistantInfo(temp);
  };
  const handleAsssist1EmailChange = (v: string) => {
    temp[0] = { ...temp[0], email: v };
    setAssistantInfo(temp);
  };

  const handleAsssist2NameChange = (v: string) => {
    temp[1] = { ...temp[1], name: v };
    setAssistantInfo(temp);
  };

  const handleAsssist2PhoneChange = (v: string) => {
    temp[1] = { ...temp[1], phone: v };
    setAssistantInfo(temp);
  };
  const handleAsssist2EmailChange = (v: string) => {
    temp[1] = { ...temp[1], email: v };
    setAssistantInfo(temp);
  };

  return {
    state: {
      assist1: {
        name: assistantInfo[0].name,
        onNameChange: handleAsssist1NameChange,
        phone: assistantInfo[0].phone,
        onPhoneChange: handleAsssist1PhoneChange,
        email: assistantInfo[0].email,
        onEmailChange: handleAsssist1EmailChange,
      },
      assist2: {
        name: assistantInfo[1].name,
        onNameChange: handleAsssist2NameChange,
        phone: assistantInfo[1].phone,
        onPhoneChange: handleAsssist2PhoneChange,
        email: assistantInfo[1].email,
        onEmailChange: handleAsssist2EmailChange,
      },
    },
  };
};
