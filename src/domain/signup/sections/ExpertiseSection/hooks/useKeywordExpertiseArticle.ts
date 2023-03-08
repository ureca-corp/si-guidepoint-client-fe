import { KeywordExpertisementAtom } from "@/recoil/Profile/expertisement.atom";
import { useRecoilState } from "recoil";

export const useKeywordExpertiseArticle = () => {
  // state
  const [keywordExpertisements, setKeywordExpertisements] = useRecoilState(
    KeywordExpertisementAtom
  );

  //functions
  const handleDrugsChange = (v: string) => {
    const keyowrds = v.split(",");
    setKeywordExpertisements((old) => ({
      ...old,
      drugsAndTechnology: keyowrds,
    }));
  };
  const handleResearchChange = (v: string) => {
    const keyowrds = v.split(",");
    setKeywordExpertisements((old) => ({
      ...old,
      researchInterests: keyowrds,
    }));
  };
  const handleCertificationsChange = (v: string) => {
    const keyowrds = v.split(",");
    setKeywordExpertisements((old) => ({
      ...old,
      boardCertifications: keyowrds,
    }));
  };
  const handleCompanyChange = (v: string) => {
    const keyowrds = v.split(",");
    setKeywordExpertisements((old) => ({
      ...old,
      companyExperience: keyowrds,
    }));
  };
  const handleProductChange = (v: string) => {
    const keyowrds = v.split(",");
    setKeywordExpertisements((old) => ({
      ...old,
      productExperience: keyowrds,
    }));
  };

  return {
    state: {
      drugs: {
        value: keywordExpertisements.drugsAndTechnology,
        onChange: handleDrugsChange,
      },
      research: {
        value: keywordExpertisements.researchInterests,
        onChange: handleResearchChange,
      },
      certifications: {
        value: keywordExpertisements.boardCertifications,
        onChange: handleCertificationsChange,
      },
      company: {
        value: keywordExpertisements.companyExperience,
        onChange: handleCompanyChange,
      },
      product: {
        value: keywordExpertisements.productExperience,
        onChange: handleProductChange,
      },
    },
  };
};
