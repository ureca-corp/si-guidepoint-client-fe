export type TitleProps = {
  title: string;
};

export type TextInputProps = {
  label: string;
  value: string;
  onChange: (v: string) => void;
  isVertical?: boolean;
};

export type CheckboxProps = {
  label: string;
  value: boolean;
  onChange: (v: boolean) => void;
};

export type SelectProps = {
  value: string;
  onChange: (v: string) => void;
};

export type ButtonProps = {
  onClick: () => void;
};
