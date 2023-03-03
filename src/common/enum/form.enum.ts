export const PREFIX_TYPE = {
  Mr: "Mr.",
  Ms: "Ms.",
  Mrs: "Mrs.",
  Dr: "Dr.",
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
  YAHOO: "YAHOO",
  SKYPE: "SKYPE",
  OTHER: "OHTER",
} as const;

type PREFIX_TYPE = typeof PREFIX_TYPE[keyof typeof PREFIX_TYPE];
