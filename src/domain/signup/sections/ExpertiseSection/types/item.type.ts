export interface ExpertiseItemType {
  id: number;
  title: string;
  sector: string;
  industry: string;
  businessType: string;
  department: string;
  role: string;
}

export interface ExpertiseItemProps {
  sector: (id: number, newTxt: string) => void;
  industry: (id: number, newTxt: string) => void;
  businessType: (id: number, newTxt: string) => void;
  department: (id: number, newTxt: string) => void;
  role: (id: number, newTxt: string) => void;
}
