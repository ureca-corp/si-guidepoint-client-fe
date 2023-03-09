import { ResidenceInfoAtom } from "@/recoil/Profile/residence.atom";
import { useRecoilState } from "recoil";

export const useResidenceArticle = () => {
  // state
  const [residenceInfo, setResidenceInfo] = useRecoilState(ResidenceInfoAtom);

  const handleStreet1Change = (v: string) => {
    setResidenceInfo((old) => ({ ...old, street1: v }));
  };
  const handleStreet2Change = (v: string) => {
    setResidenceInfo((old) => ({ ...old, street2: v }));
  };
  const handleStreet3Change = (v: string) => {
    setResidenceInfo((old) => ({ ...old, street3: v }));
  };

  const handleCityChange = (v: string) => {
    setResidenceInfo((old) => ({ ...old, city: v }));
  };

  const handlePostalCodeChange = (v: string) => {
    setResidenceInfo((old) => ({ ...old, postalCode: v }));
  };
  const handleCountryChange = (v: string) => {
    setResidenceInfo((old) => ({ ...old, country: v }));
  };
  const handleTimeZoneChange = (v: string) => {
    setResidenceInfo((old) => ({ ...old, timeZone: v }));
  };

  return {
    state: {
      street1: { value: residenceInfo.street1, onChange: handleStreet1Change },
      street2: { value: residenceInfo.street2, onChange: handleStreet2Change },
      street3: { value: residenceInfo.street3, onChange: handleStreet3Change },
      city: { value: residenceInfo.city, onChange: handleCityChange },
      postalCode: {
        value: residenceInfo.postalCode,
        onChange: handlePostalCodeChange,
      },
      country: { value: residenceInfo.country, onChange: handleCountryChange },
      timeZone: {
        value: residenceInfo.timeZone,
        onChange: handleTimeZoneChange,
      },
    },
  };
};
