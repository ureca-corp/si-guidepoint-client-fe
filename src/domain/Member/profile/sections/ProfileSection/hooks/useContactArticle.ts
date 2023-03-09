import { IM_TYPE, PHONE_TYPE } from "@/common/models/enum/form.enum";
import { ContactInfoAtom } from "@/recoil/Profile/contact.atom";
import { useRecoilState } from "recoil";

export const useContactArticle = () => {
  // state
  const [contactInfo, setContactInfo] = useRecoilState(ContactInfoAtom);

  //  select options
  const imOptions = Object.values(IM_TYPE);
  const phoneOptions = Object.values(PHONE_TYPE);

  // functions
  const handlePhoneChange = (v: string) => {
    setContactInfo((old) => ({
      ...old,
      phoneInfo: { ...old.phoneInfo, number: v },
    }));
  };
  const handleAlterPhoneChange = (v: string) => {
    setContactInfo((old) => ({
      ...old,
      alternatePhoneInfo: { ...old.alternatePhoneInfo, number: v },
    }));
  };
  const handlePhoneOptionChange = (v: string) => {
    setContactInfo((old) => ({
      ...old,
      phoneInfo: { ...old.phoneInfo, type: v },
    }));
  };
  const handleAlterPhoneOptionChange = (v: string) => {
    setContactInfo((old) => ({
      ...old,
      alternatePhoneInfo: { ...old.alternatePhoneInfo, type: v },
    }));
  };
  const handleFaxChange = (v: string) => {
    setContactInfo((old) => ({ ...old, fax: v }));
  };
  const handleEmailChange = (v: string) => {
    setContactInfo((old) => ({ ...old, email: v }));
  };
  const handleConfirmEmailChange = (v: string) => {
    setContactInfo((old) => ({ ...old, confirmEmail: v }));
  };
  const handleImChange = (v: string) => {
    setContactInfo((old) => ({
      ...old,
      instanceMessengerInfo: { ...old.instanceMessengerInfo, address: v },
    }));
  };
  const handleImTypeChange = (v: string) => {
    setContactInfo((old) => ({
      ...old,
      instanceMessengerInfo: { ...old.instanceMessengerInfo, type: v },
    }));
  };
  return {
    state: {
      phone: {
        value: contactInfo.phoneInfo.number,
        onChange: handlePhoneChange,
        option: contactInfo.phoneInfo.type,
        onOptionChange: handlePhoneOptionChange,
        options: phoneOptions,
      },
      alterPhone: {
        value: contactInfo.alternatePhoneInfo.number,
        onChange: handleAlterPhoneChange,
        option: contactInfo.alternatePhoneInfo.type,
        onOptionChange: handleAlterPhoneOptionChange,
        options: phoneOptions,
      },
      fax: {
        value: contactInfo.fax,
        onChange: handleFaxChange,
      },
      email: {
        value: contactInfo.email,
        onChange: handleEmailChange,
      },
      confirmEamil: {
        value: contactInfo.confirmEmail,
        onChange: handleConfirmEmailChange,
      },
      im: {
        value: contactInfo.instanceMessengerInfo.address,
        onChange: handleImChange,
      },
      imType: {
        value: contactInfo.instanceMessengerInfo.type,
        onChange: handleImTypeChange,
        options: imOptions,
      },
    },
  };
};
