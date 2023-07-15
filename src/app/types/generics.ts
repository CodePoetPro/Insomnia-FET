export type Currency = {
  code: CurrencyType;
  symbol: string;
  rate: string;
  description: string;
  rate_float: number;
};

export enum CurrencyType {
  USD = "USD",
  GBP = "GBP",
  EUR = "EUR",
}

export interface BPIData {
  time: Time;
  disclaimer: string;
  chartName: string;
  bpi: Bpi;
}

export interface Time {
  updated: string;
  updatedISO: string;
  updateduk: string;
}

export interface Bpi {
  USD: Currency;
  GBP: Currency;
  EUR: Currency;
}
