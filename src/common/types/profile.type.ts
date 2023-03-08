// personal section
export interface PersonalInfoInput {
  firstName: string;
  lastName: string;
  middleInitial: string;
  prefix: string;
  suffix: string;
}

// assistant section
export interface AssistantInfoInput {
  name: string;
  phone: string;
  email: string;
}

// contact section
export interface ContactInfoInput {
  phoneInfo: PhoneInfo;
  alternatePhoneInfo: PhoneInfo;
  confirmEmail: string;
  email: string;
  fax: string;
  instanceMessengerInfo: InstanceMessengerInfoInput;
}
export interface InstanceMessengerInfoInput {
  address: string;
  type: string;
}
export interface PhoneInfo {
  number: string;
  type: string;
}

// residence section
export interface ResidenceAddressInput {
  city: string;
  country: string;
  postalCode: string;
  street1: string;
  street2: string;
  street3: string;
  timeZone: string;
}

// employment section
export type EmploymentHistoryInput = {
  items: EmploymentHistoryItemInput[];
  yearsOfExperience: YearsOfExperience;
};
export enum YearsOfExperience {
  Between1And5 = "Between1And5",
  Between6And10 = "Between6And10",
  Between11And15 = "Between11And15",
  Over16 = "Over16",
}
export interface EmploymentHistoryItemInput {
  id: number;
  isCurrentlyEmployed: boolean;
  employerName: string;
  endedAt: string;
  jobTitle: string;
  startedAt: string;
}
export interface CustomEmploymentHistoryItemInput {
  id: number;
  isCurrentlyEmployed: boolean;
  employerName: string;
  jobTitle: string;
  startedMonth: string;
  startedYear: string;
  endedMonth: string;
  endedYear: string;
}

// expertisement section
export type ExpertiseHistoryInput = {
  areaList: Array<AreaOfExpertiseInput>;
  keywords: KeywordsOfExpertiseInput;
};
export interface AreaOfExpertiseInput {
  id: number;
  sector: string;
  industry: string;
  role: string;
}
export interface KeywordsOfExpertiseInput {
  boardCertifications: string[];
  companyExperience: string[];
  drugsAndTechnology: string[];
  productExperience: string[];
  researchInterests: string[];
}

// biography section
export interface Misc {
  biography: string;
  complianceConflicts: string;
  linkedInProfileLink: string;
  resumeLink: string;
  socialMediaProfiles?: SocialMediaProfile[];
}
export interface SocialMediaProfile {
  link: string;
  type: string;
}
