export interface Link {
  url: string;
  label: string;
  iconClass: string;
}

export interface SourceCredit {
  use: string;
  name: string;
  url: string;
}

export interface SourceCreditCategory {
  [categoryName: string]: SourceCredit[];
}