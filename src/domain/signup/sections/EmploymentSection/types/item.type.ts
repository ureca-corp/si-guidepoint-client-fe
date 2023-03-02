import { TextProps } from "@/domain/signup/common/types/input.type";

export interface EmploymentItemType {
  id: number;
  employer: string;
  job: string;
  startDate: {
    month: string;
    year: string;
  };
  endDate: {
    month: string;
    year: string;
  };
}

export interface DeleteButtonType {
  isVisible: boolean;
  onClick: (id: number) => void;
}

export interface ButtonType {
  isVisible: boolean;
  onClick: () => void;
}

export interface ObjectTextProps {
  value: string;
  onChange: (id: number, newTxt: string) => void;
}

export interface YearDateProps {
  month: ObjectTextProps;
  year: ObjectTextProps;
}

export interface EmploymentItemProps {
  employer: (id: number, newTxt: string) => void;
  job: (id: number, newTxt: string) => void;
  startDate: {
    month: (id: number, newTxt: string) => void;
    year: (id: number, newTxt: string) => void;
  };
  endDate: {
    month: (id: number, newTxt: string) => void;
    year: (id: number, newTxt: string) => void;
  };
}
