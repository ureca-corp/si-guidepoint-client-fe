export interface EmploymentItemType {
  id: number;
  employer: string;
  job: string;
}

export interface DeleteButtonType {
  isVisible: boolean;
  onClick: (id: number) => void;
}

export interface ButtonType {
  isVisible: boolean;
  onClick: () => void;
}
