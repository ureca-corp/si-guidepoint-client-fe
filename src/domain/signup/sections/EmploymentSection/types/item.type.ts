export interface EmploymentItemType {
  id: number;
  text: string;
}

export interface DeleteButtonType {
  isVisible: boolean;
  onClick: (id: number) => void;
}

export interface ButtonType {
  isVisible: boolean;
  onClick: () => void;
}
