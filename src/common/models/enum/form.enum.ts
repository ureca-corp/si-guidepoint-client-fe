export const PREFIX_TYPE = {
  Mr: "Mr",
  Ms: "Ms",
  Mrs: "Mrs",
  Dr: "Dr",
} as const;

export const PHONE_TYPE = {
  BUSINESS: "Business",
  FAX: "Fax",
  MOBILE: "Mobile",
  PERSONAL: "Personal",
};

export const IM_TYPE = {
  AOL: "AOL",
  MSN: "MSN",
  YAHOO: "Yahoo",
  SKYPE: "Skype",
  OTHER: "Other",
} as const;

type PREFIX_TYPE = typeof PREFIX_TYPE[keyof typeof PREFIX_TYPE];

export const YearsOfExperience = {
  Between1And5: "Between1And5",
  Between6And10: "Between6And10",
  Between11And15: "Between11And15",
  Over16: "Over16",
} as const;
