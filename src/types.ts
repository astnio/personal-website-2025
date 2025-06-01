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

export interface CategoryData {
  iconClass: string;
  items: SourceCredit[];
}

export interface SourceCreditCategory {
  [categoryName: string]: CategoryData;
}