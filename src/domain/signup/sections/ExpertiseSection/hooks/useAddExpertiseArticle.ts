import { useState } from "react";

export const useAddExpertiseArticle = () => {
  const [sector, setSector] = useState("");
  const [industry, setIndustry] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [department, setDepartment] = useState("");
  const [role, setRole] = useState("");

  const handleSectorChange = (v: string) => {
    setSector(v);
  };
  const handleIndustryChange = (v: string) => {
    setIndustry(v);
  };
  const handleBusinessTypeChange = (v: string) => {
    setBusinessType(v);
  };
  const handleDepartmentChange = (v: string) => {
    setDepartment(v);
  };
  const handleRoleChange = (v: string) => {
    setRole(v);
  };

  return {
    state: {
      sector: {
        value: sector,
        onChange: handleSectorChange,
      },
      industry: {
        value: industry,
        onChange: handleIndustryChange,
      },
      businessType: {
        value: businessType,
        onChange: handleBusinessTypeChange,
      },
      department: {
        value: department,
        onChange: handleDepartmentChange,
      },
      role: {
        value: role,
        onChange: handleRoleChange,
      },
    },
  };
};
