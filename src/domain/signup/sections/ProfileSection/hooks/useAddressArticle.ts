import { useState } from "react";

export const useAddressArticle = () => {
  const [sheet1, setSheet1] = useState("");
  const [sheet2, setSheet2] = useState("");
  const [sheet3, setSheet3] = useState("");
  const [city, setCity] = useState("");
  const [cityOption, setCityOption] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const [timeZone, setTimeZone] = useState("");

  const handleSheet1Change = (v: string) => {
    setSheet1(v);
  };
  const handleSheet2Change = (v: string) => {
    setSheet2(v);
  };
  const handleSheet3Change = (v: string) => {
    setSheet3(v);
  };

  const handleCityChange = (v: string) => {
    setCity(v);
  };
  const handleCityOptionChange = (v: string) => {
    setCityOption(v);
  };

  const handlePostalCodeChange = (v: string) => {
    setPostalCode(v);
  };
  const handleCountryChange = (v: string) => {
    setCountry(v);
  };
  const handleTimeZoneChange = (v: string) => {
    setTimeZone(v);
  };
  return {
    state: {
      sheet1: { value: sheet1, onChange: handleSheet1Change },
      sheet2: { value: sheet2, onChange: handleSheet2Change },
      sheet3: { value: sheet3, onChange: handleSheet3Change },
      city: { value: city, onChange: handleCityChange },
      cityOption: { value: cityOption, onChange: handleCityOptionChange },
      postalCode: { value: postalCode, onChange: handlePostalCodeChange },
      country: { value: country, onChange: handleCountryChange },
      timeZone: { value: timeZone, onChange: handleTimeZoneChange },
    },
  };
};
