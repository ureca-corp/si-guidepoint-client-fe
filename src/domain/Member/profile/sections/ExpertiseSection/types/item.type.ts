export interface ExpertiseItemProps {
  sector: (id: number, newTxt: string) => void;
  industry: (id: number, newTxt: string) => void;
  businessType: (id: number, newTxt: string) => void;
  department: (id: number, newTxt: string) => void;
  role: (id: number, newTxt: string) => void;
}
