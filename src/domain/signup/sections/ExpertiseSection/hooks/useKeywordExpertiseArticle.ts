import { useState } from "react";

export const useKeywordExpertiseArticle = () => {
  const [drugs, setDrugs] = useState("");
  const [research, setResearch] = useState("");
  const [certifications, setCertifications] = useState("");
  const [company, setCompany] = useState("");
  const [product, setProduct] = useState("");

  const handleDrugsChange = (v: string) => {
    setDrugs(v);
  };
  const handleResearchChange = (v: string) => {
    setResearch(v);
  };
  const handleCertificationsChange = (v: string) => {
    setCertifications(v);
  };
  const handleCompanyChange = (v: string) => {
    setCompany(v);
  };
  const handleProductChange = (v: string) => {
    setProduct(v);
  };

  return {
    state: {
      drugs: {
        value: drugs,
        onChange: handleDrugsChange,
      },
      research: {
        value: research,
        onChange: handleResearchChange,
      },
      certifications: {
        value: certifications,
        onChange: handleCertificationsChange,
      },
      company: {
        value: company,
        onChange: handleCompanyChange,
      },
      product: {
        value: product,
        onChange: handleProductChange,
      },
    },
  };
};
