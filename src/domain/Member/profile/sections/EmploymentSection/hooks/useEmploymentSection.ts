import {
  EmploymentExperienceAtom,
  EmploymentItemAtom,
} from "@/recoil/Profile/employment.atom";
import { ProfileReadonlyAtom } from "@/recoil/Profile/readonly/readonly.atom";
import { useCallback, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

export const useEmploymentSection = () => {
  // isReadOnly
  const isReadOnly = useRecoilValue(ProfileReadonlyAtom);

  // state
  const currYear = new Date().getFullYear().toString();
  const [itemCount, setItemCount] = useState(1);
  const [employmentInfos, setEmploymentInfos] =
    useRecoilState(EmploymentItemAtom);
  const [experienceYear, setExperienceYear] = useRecoilState(
    EmploymentExperienceAtom
  );

  const temp = [...employmentInfos];

  const handleSectorExperienceChange = (v: string) => {
    setExperienceYear(v);
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

    temp[findIndex] = { ...temp[findIndex], startedMonth: v };
    setEmploymentInfos(temp);
  };

  // 4. start year 수정
  const handleStartYearChange = (id: number, v: string) => {
    const findIndex = employmentInfos.findIndex((item) => item.id === id);

    temp[findIndex] = { ...temp[findIndex], startedYear: v };
    setEmploymentInfos(temp);
  };

  // 5. end month 수정
  const handleEndMonthChange = (id: number, v: string) => {
    const findIndex = employmentInfos.findIndex((item) => item.id === id);

    temp[findIndex] = { ...temp[findIndex], endedMonth: v };
    setEmploymentInfos(temp);
  };

  // 6. end year 수정
  const handleEndYearChange = (id: number, v: string) => {
    const findIndex = employmentInfos.findIndex((item) => item.id === id);

    temp[findIndex] = { ...temp[findIndex], endedYear: v };
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
        jobTitle: "",
        startedMonth: "01",
        startedYear: currYear,
        endedMonth: "01",
        endedYear: currYear,
      },
    ]);
  }, [currYear, itemCount, setEmploymentInfos]);

  const onDeleteItem = (itemId: number) => {
    const remainItemList = employmentInfos.filter((it) => it.id !== itemId);
    setEmploymentInfos(remainItemList);
  };

  const isButtonVisible = employmentInfos.length <= 4 && !isReadOnly;
  const isDeleteButtonVisible = employmentInfos.length > 1 && !isReadOnly;

  return {
    sectorExperienceState: {
      value: experienceYear,
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
