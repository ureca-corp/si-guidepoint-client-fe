import { CustomKeywordExpertisementAtom } from "@/recoil/Profile/expertisement.atom";
import { useRecoilState } from "recoil";

export const useKeywordExpertiseArticle = () => {
  // state
  const [keywordExpertisements, setKeywordExpertisements] = useRecoilState(
    CustomKeywordExpertisementAtom
  );

  //functions
  const handleDrugsChange = (v: string) => {
    setKeywordExpertisements((old) => ({
      ...old,
      drugsAndTechnology: v,
    }));
  };
  const handleResearchChange = (v: string) => {
    setKeywordExpertisements((old) => ({
      ...old,
      researchInterests: v,
    }));
  };
  const handleCertificationsChange = (v: string) => {
    setKeywordExpertisements((old) => ({
      ...old,
      boardCertifications: v,
    }));
  };
  const handleCompanyChange = (v: string) => {
    setKeywordExpertisements((old) => ({
      ...old,
      companyExperience: v,
    }));
  };
  const handleProductChange = (v: string) => {
    setKeywordExpertisements((old) => ({
      ...old,
      productExperience: v,
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
