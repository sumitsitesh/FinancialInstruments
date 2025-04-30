export interface FinancialRow {
  assetClass: string;
  price: number;
  ticker: string;
  [key: string]: unknown;
};

export type SortDirection = 'asc' | 'desc';

export const sortByAssetClass = (a: FinancialRow, b: FinancialRow) => {
  const order: Record<string, number> = { 'Equities': 0, 'Macro': 1, 'Credit': 2 };
  const indexA = order[a.assetClass ?? ''] ?? 99;
  const indexB = order[b.assetClass ?? ''] ?? 99;
  return indexA - indexB;
};

export const sortByPrice = (a: FinancialRow, b: FinancialRow) => a.price - b.price;
export const sortByTicker = (a: FinancialRow, b: FinancialRow) => a.ticker.localeCompare(b.ticker);

export const sortStrategies: Record<string, (a: FinancialRow, b: FinancialRow) => number> = {
  assetClass: sortByAssetClass,
  price: sortByPrice,
  ticker: sortByTicker,
};

