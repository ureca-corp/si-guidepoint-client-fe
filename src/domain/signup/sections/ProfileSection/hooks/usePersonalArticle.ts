import { PREFIX_TYPE } from "@/common/models/enum/form.enum";
import { PersonalInfoAtom } from "@/recoil/Profile/personal.atom";
import { useRecoilState } from "recoil";

export const usePersonalArticle = () => {
  const [personalInfo, setPersonalInfo] = useRecoilState(PersonalInfoAtom);

  // prefix select options
  const options = Object.values(PREFIX_TYPE);

  const handleFirstNameChange = (v: string) => {
    setPersonalInfo((old) => ({ ...old, firstName: v }));
  };

  const handleMiddleNameChange = (v: string) => {
    setPersonalInfo((old) => ({ ...old, middleInitial: v }));
  };

  const handleLastNameChange = (v: string) => {
    setPersonalInfo((old) => ({ ...old, lastName: v }));
  };

  const handleSuffixChange = (v: string) => {
    setPersonalInfo((old) => ({ ...old, suffix: v }));
  };

  const handlePrefixChange = (v: string) => {
    setPersonalInfo((old) => ({ ...old, prefix: v }));
  };

  return {
    state: {
      prefix: {
        value: personalInfo.prefix,
        onChange: handlePrefixChange,
        options: options,
      },
      firstName: {
        value: personalInfo.firstName,
        onChange: handleFirstNameChange,
      },
      middleName: {
        value: personalInfo.middleInitial,
        onChange: handleMiddleNameChange,
      },
      lastName: {
        value: personalInfo.lastName,
        onChange: handleLastNameChange,
      },
      suffix: {
        value: personalInfo.suffix,
        onChange: handleSuffixChange,
      },
    },
  };
};
