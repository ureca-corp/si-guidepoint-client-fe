import { ExpertiseItemType } from "@/common/types/item.type";
import { useCallback, useState } from "react";

export const useAddExpertiseArticle = () => {
  // state
  const [itemCount, setItemCount] = useState(1);

  const [expertiseItems, setExpertiseItems] = useState<ExpertiseItemType[]>([
    {
      id: 0,
      title: "Primary Area of Expertise",
      sector: "",
      industry: "",
      businessType: "",
      department: "",
      role: "",
    },
  ]);

  // button functions
  const onAddItem = useCallback(() => {
    setItemCount(itemCount + 1);
    setExpertiseItems((old) => [
      ...old,
      {
        id: itemCount,
        title: "Secondary Area of Expertise",
        sector: "",
        industry: "",
        businessType: "",
        department: "",
        role: "",
      },
    ]);
  }, [itemCount]);

  // 1, sector
  const handleSectorChange = (id: number, v: string) => {
    const findIndex = expertiseItems.findIndex((item) => item.id === id);
    const copiedItems = [...expertiseItems];

    copiedItems[findIndex].sector = v;
    setExpertiseItems(copiedItems);
  };

  // 2. industry
  const handleIndustryChange = (id: number, v: string) => {
    const findIndex = expertiseItems.findIndex((item) => item.id === id);
    const copiedItems = [...expertiseItems];

    copiedItems[findIndex].industry = v;
    setExpertiseItems(copiedItems);
  };

  // 3. businessType
  const handleBusinessTypeChange = (id: number, v: string) => {
    const findIndex = expertiseItems.findIndex((item) => item.id === id);
    const copiedItems = [...expertiseItems];

    copiedItems[findIndex].businessType = v;
    setExpertiseItems(copiedItems);
  };

  // 4. department
  const handleDepartmentChange = (id: number, v: string) => {
    const findIndex = expertiseItems.findIndex((item) => item.id === id);
    const copiedItems = [...expertiseItems];

    copiedItems[findIndex].department = v;
    setExpertiseItems(copiedItems);
  };

  // 5. role
  const handleRoleChange = (id: number, v: string) => {
    const findIndex = expertiseItems.findIndex((item) => item.id === id);
    const copiedItems = [...expertiseItems];

    copiedItems[findIndex].role = v;
    setExpertiseItems(copiedItems);
  };

  const isButtonVisible = expertiseItems.length <= 1;

  return {
    expertisementItemState: {
      list: expertiseItems,
      onChange: {
        sector: handleSectorChange,
        industry: handleIndustryChange,
        businessType: handleBusinessTypeChange,
        department: handleDepartmentChange,
        role: handleRoleChange,
      },
    },

    addButton: {
      onClick: onAddItem,
      isVisible: isButtonVisible,
    },
  };
};
