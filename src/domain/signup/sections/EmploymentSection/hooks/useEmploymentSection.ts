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
    {
      id: 0,
      isCurrEmployed: false,
      employer: "",
      job: "",
      startDate: { month: "", year: "" },
      endDate: { month: "", year: "" },
    },
  ]);

  // item functions
  // 0. curr employed 수정
  const handleCurrEmployedChange = (id: number, v: boolean) => {
    const findIndex = employmentItems.findIndex((item) => item.id === id);
    const copiedItems = [...employmentItems];

    copiedItems[findIndex].isCurrEmployed = v;
    setEmploymentItems(copiedItems);
  };

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

  // 3. start month 수정
  const handleStartMonthChange = (id: number, v: string) => {
    const findIndex = employmentItems.findIndex((item) => item.id === id);
    const copiedItems = [...employmentItems];

    copiedItems[findIndex].startDate.month = v;
    setEmploymentItems(copiedItems);
    console.log("handleStartMonthChange");
  };

  // 4. start year 수정
  const handleStartYearChange = (id: number, v: string) => {
    const findIndex = employmentItems.findIndex((item) => item.id === id);
    const copiedItems = [...employmentItems];

    copiedItems[findIndex].startDate.year = v;
    setEmploymentItems(copiedItems);
  };

  // 5. end month 수정
  const handleEndMonthChange = (id: number, v: string) => {
    const findIndex = employmentItems.findIndex((item) => item.id === id);
    const copiedItems = [...employmentItems];

    copiedItems[findIndex].endDate.month = v;
    setEmploymentItems(copiedItems);
  };

  // 6. end year 수정
  const handleEndYearChange = (id: number, v: string) => {
    const findIndex = employmentItems.findIndex((item) => item.id === id);
    const copiedItems = [...employmentItems];

    copiedItems[findIndex].endDate.year = v;
    setEmploymentItems(copiedItems);
  };

  // button functions
  const onAddItem = useCallback(() => {
    setItemCount(itemCount + 1);
    setEmploymentItems((old) => [
      ...old,
      {
        id: itemCount,
        isCurrEmployed: false,
        employer: "",
        job: "",
        startDate: { month: "", year: "" },
        endDate: { month: "", year: "" },
      },
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
        isCurrEmployed: handleCurrEmployedChange,
        employer: handleEmployerChange,
        job: handleJobChange,
        startDate: {
          month: handleStartMonthChange,
          year: handleStartYearChange,
        },
        endDate: {
          month: handleEndMonthChange,
          year: handleEndYearChange,
        },
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
