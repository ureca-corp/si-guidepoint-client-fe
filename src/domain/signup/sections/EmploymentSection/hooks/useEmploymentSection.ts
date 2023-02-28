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
    { id: 0, employer: "", job: "" },
  ]);

  // item functions
  // 1. employer 수정
  const handleEmployerChange = (id: number, v: string) => {
    const findIndex = employmentItems.findIndex((item) => item.id === id);
    const copiedItems = [...employmentItems];

    copiedItems[findIndex].employer = v;
    setEmploymentItems(copiedItems);
  };

  // 2. employer 수정
  const handleJobChange = (id: number, v: string) => {
    const findIndex = employmentItems.findIndex((item) => item.id === id);
    const copiedItems = [...employmentItems];

    copiedItems[findIndex].job = v;
    setEmploymentItems(copiedItems);
  };

  // 3. date 수정
  const handleDateChange = (id: number, v: string) => {
    const findIndex = employmentItems.findIndex((item) => item.id === id);
    const copiedItems = [...employmentItems];

    copiedItems[findIndex].employer = v;
    setEmploymentItems(copiedItems);
  };

  // button functions
  const onAddItem = useCallback(() => {
    setItemCount(itemCount + 1);
    setEmploymentItems((old) => [
      ...old,
      { id: itemCount, employer: "", job: "" },
    ]);
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
      onChange: {
        employer: handleEmployerChange,
        job: handleJobChange,
        date: handleDateChange,
      },
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
