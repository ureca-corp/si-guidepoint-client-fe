export type TitleProps = {
  title: string;
};
export interface TextProps {
  value: string;
  onChange: (v: string) => void;
}
export interface TextInputProps extends TextProps {
  label: string;
  onTextChange?: (id: number, newTxt: string) => void;
  isVertical?: boolean;
  isNecessary?: boolean;
  isTitleLefted?: boolean;
}

export interface EmploymentTextInputProps {
  id: number;
  label: string;
  value: string;
  onTextChange: (id: number, newTxt: string) => void;
  isVertical?: boolean;
  isNecessary?: boolean;
}

export type CheckboxProps = {
  label: string;
  value: boolean;
  onChange: (v: boolean) => void;
};

export type SelectProps = {
  value: string;
  onChange: (v: string) => void;
  options: string[];
};

export type ButtonProps = {
  onClick: () => void;
};

export interface TextareaProps extends TextProps {
  label: string;
  row?: number;
  isVertical?: boolean;
}

export interface BasicCheckboxProps {
  checkLabel: string;
  checked: boolean;
  onChange: (v: boolean) => void;
  isVertical?: boolean;
}
