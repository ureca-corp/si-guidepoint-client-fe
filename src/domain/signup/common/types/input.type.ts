export type TitleProps = {
  title: string;
};
export interface TextProps {
  value: string;
  onChange: (v: string) => void;
}
export interface TextInputProps extends TextProps {
  label: string;
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
};

export type ButtonProps = {
  onClick: () => void;
};

export interface TextareaProps extends TextProps {
  label: string;
  row?: number;
  isVertical?: boolean;
}
