import { useCallback, useState } from "react";
import { EmploymentItemType } from "../types/item.type";

export const useEmploymentSection = () => {
  // state
  const [itemCount, setItemCount] = useState(1);
  const [sectorExperience, setSectorExperience] = useState("");
  const handleSectorExperienceChange = (v: string) => {
    setSectorExperience(v);
  };
  const [employmentItems, setEmploymentItems] = useState<EmploymentItemType[]>([
    { id: 0, text: "" },
  ]);

  // functions
  const onAddItem = useCallback(() => {
    setItemCount((itemCount) => itemCount + 1);
    setEmploymentItems((old) => [...old, { id: itemCount, text: "" }]);
  }, [itemCount]);

  const onDeleteItem = (itemId: number) => {
    const remainItemList = employmentItems.filter((it) => it.id !== itemId);
    setEmploymentItems(remainItemList);
  };

  const isButtonVisible = employmentItems.length <= 4;
  const isDeleteButtonVisible = employmentItems.length > 1;

  return {
    sectorExperienceState: {
      value: sectorExperience,
      onChange: handleSectorExperienceChange,
    },
    employmentItemState: {
      list: employmentItems,
      deleteButton: {
        onClick: onDeleteItem,
        isVisible: isDeleteButtonVisible,
      },
    },
    addButton: {
      onClick: onAddItem,
      isVisible: isButtonVisible,
    },
  };
};
