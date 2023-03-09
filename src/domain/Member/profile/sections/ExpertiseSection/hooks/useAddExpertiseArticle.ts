import { ExpertiseItemType } from "@/common/types/item.type";
import { AreaOfExpertiseAtom } from "@/recoil/Profile/expertisement.atom";
import { useCallback, useState } from "react";
import { useRecoilState } from "recoil";

export const useAddExpertiseArticle = () => {
  // state
  const [itemCount, setItemCount] = useState(1);
  const [expertisements, setExpertisements] =
    useRecoilState(AreaOfExpertiseAtom);

  const temp = [...expertisements];

  // button functions
  const onAddItem = useCallback(() => {
    setItemCount(itemCount + 1);
    setExpertisements((old) => [
      ...old,
      {
        id: itemCount,
        sector: "",
        industry: "",
        role: "",
      },
    ]);
  }, [itemCount, setExpertisements]);

  // 1, sector
  const handleSectorChange = (id: number, v: string) => {
    const findIndex = expertisements.findIndex((item) => item.id === id);

    temp[findIndex] = { ...temp[findIndex], sector: v };
    setExpertisements(temp);
  };

  // 2. industry
  const handleIndustryChange = (id: number, v: string) => {
    const findIndex = expertisements.findIndex((item) => item.id === id);

    temp[findIndex] = { ...temp[findIndex], industry: v };
    setExpertisements(temp);
  };

  // 3. businessType
  // const handleBusinessTypeChange = (id: number, v: string) => {
  //   const findIndex = expertisements.findIndex((item) => item.id === id);

  //   temp[findIndex] = { ...temp[findIndex], : v };
  //   setExpertisements(temp);
  // };

  // 4. department
  // const handleDepartmentChange = (id: number, v: string) => {
  //   const findIndex = expertiseItems.findIndex((item) => item.id === id);
  //   const copiedItems = [...expertiseItems];

  //   copiedItems[findIndex].department = v;
  //   setExpertiseItems(copiedItems);
  // };

  // 5. role
  const handleRoleChange = (id: number, v: string) => {
    const findIndex = expertisements.findIndex((item) => item.id === id);

    temp[findIndex] = { ...temp[findIndex], role: v };
    setExpertisements(temp);
  };

  const isButtonVisible = expertisements.length <= 1;

  return {
    expertisementItemState: {
      list: expertisements,
      onChange: {
        sector: handleSectorChange,
        industry: handleIndustryChange,
        businessType: handleSectorChange,
        department: handleSectorChange,
        role: handleRoleChange,
      },
    },

    addButton: {
      onClick: onAddItem,
      isVisible: isButtonVisible,
    },
  };
};
