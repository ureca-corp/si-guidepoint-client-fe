import { EmploymentInfoAtom } from "@/recoil/Profile/employment.atom";
import { useCallback, useEffect, useState } from "react";
import { useRecoilState } from "recoil";

export const useEmploymentSection = () => {
  // state
  const [itemCount, setItemCount] = useState(1);
  const [employmentInfos, setEmploymentInfos] =
    useRecoilState(EmploymentInfoAtom);
  const temp = [...employmentInfos];

  const [sectorExperience, setSectorExperience] = useState("");
  const handleSectorExperienceChange = (v: string) => {
    setSectorExperience(v);
  };

  // 0. curr employed 수정
  const handleCurrEmployedChange = (id: number, v: boolean) => {
    const findIndex = employmentInfos.findIndex((item) => item.id === id);

    temp[findIndex] = { ...temp[findIndex], isCurrentlyEmployed: v };
    setEmploymentInfos(temp);
  };

  // 1. employer 수정
  const handleEmployerChange = (id: number, v: string) => {
    const findIndex = employmentInfos.findIndex((item) => item.id === id);

    temp[findIndex] = { ...temp[findIndex], employerName: v };
    setEmploymentInfos(temp);
  };

  // 2. employer 수정
  const handleJobChange = (id: number, v: string) => {
    const findIndex = employmentInfos.findIndex((item) => item.id === id);
    temp[findIndex] = { ...temp[findIndex], jobTitle: v };
    setEmploymentInfos(temp);
  };

  // 3. start month 수정
  const handleStartMonthChange = (id: number, v: string) => {
    const findIndex = employmentInfos.findIndex((item) => item.id === id);

    temp[findIndex] = { ...temp[findIndex], startedAt: v };
    setEmploymentInfos(temp);
  };

  // 4. start year 수정
  const handleStartYearChange = (id: number, v: string) => {
    const findIndex = employmentInfos.findIndex((item) => item.id === id);

    temp[findIndex] = { ...temp[findIndex], startedAt: v };
    setEmploymentInfos(temp);
  };

  // 5. end month 수정
  const handleEndMonthChange = (id: number, v: string) => {
    const findIndex = employmentInfos.findIndex((item) => item.id === id);

    temp[findIndex] = { ...temp[findIndex], endedAt: v };
    setEmploymentInfos(temp);
  };

  // 6. end year 수정
  const handleEndYearChange = (id: number, v: string) => {
    const findIndex = employmentInfos.findIndex((item) => item.id === id);

    temp[findIndex] = { ...temp[findIndex], endedAt: v };
    setEmploymentInfos(temp);
  };

  // button functions
  const onAddItem = useCallback(() => {
    setItemCount(itemCount + 1);
    setEmploymentInfos((old) => [
      ...old,
      {
        id: itemCount,
        isCurrentlyEmployed: false,
        employerName: "",
        endedAt: "",
        jobTitle: "",
        startedAt: "",
      },
    ]);
  }, [itemCount, setEmploymentInfos]);

  const onDeleteItem = (itemId: number) => {
    const remainItemList = employmentInfos.filter((it) => it.id !== itemId);
    setEmploymentInfos((old) => ({ ...old, items: remainItemList }));
  };

  const isButtonVisible = employmentInfos.length <= 4;
  const isDeleteButtonVisible = employmentInfos.length > 1;

  return {
    sectorExperienceState: {
      value: sectorExperience,
      onChange: handleSectorExperienceChange,
    },
    employmentItemState: {
      list: employmentInfos,
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
