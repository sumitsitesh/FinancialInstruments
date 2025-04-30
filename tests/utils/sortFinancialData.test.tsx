import { describe, it, expect } from 'vitest';
import { sortByAssetClass, sortByPrice, sortByTicker, sortStrategies } from '../../src/utils/sortFinancialData'; // Adjust import paths
import { FinancialRow } from '../../src/utils/sortFinancialData'; // Adjust the import path

describe('sortByAssetClass', () => {
    it('should return a negative value when assetClass "Equities" is compared with "Macro"', () => {
      const rowA: FinancialRow = { assetClass: 'Equities' };
      const rowB: FinancialRow = { assetClass: 'Macro' };
      expect(sortByAssetClass(rowA, rowB)).toBeLessThan(0); // "Equities" comes before "Macro"
    });
  
    it('should return a negative value when assetClass "Equities" is compared with "Credit"', () => {
      const rowA: FinancialRow = { assetClass: 'Equities' };
      const rowB: FinancialRow = { assetClass: 'Credit' };
      expect(sortByAssetClass(rowA, rowB)).toBeLessThan(0); // "Equities" comes before "Credit"
    });
  
    it('should return a positive value when assetClass "Macro" is compared with "Equities"', () => {
      const rowA: FinancialRow = { assetClass: 'Macro' };
      const rowB: FinancialRow = { assetClass: 'Equities' };
      expect(sortByAssetClass(rowA, rowB)).toBeGreaterThan(0); // "Macro" comes after "Equities"
    });
  
    it('should return a positive value when assetClass "Credit" is compared with "Equities"', () => {
      const rowA: FinancialRow = { assetClass: 'Credit' };
      const rowB: FinancialRow = { assetClass: 'Equities' };
      expect(sortByAssetClass(rowA, rowB)).toBeGreaterThan(0); // "Credit" comes after "Equities"
    });
  
    it('should return 0 when both rows have the same assetClass', () => {
      const rowA: FinancialRow = { assetClass: 'Equities' };
      const rowB: FinancialRow = { assetClass: 'Equities' };
      expect(sortByAssetClass(rowA, rowB)).toBe(0); // Same assetClass
    });
  
    it('should return 0 when both rows have the same assetClass "Macro"', () => {
      const rowA: FinancialRow = { assetClass: 'Macro' };
      const rowB: FinancialRow = { assetClass: 'Macro' };
      expect(sortByAssetClass(rowA, rowB)).toBe(0); // Same assetClass "Macro"
    });
  
    it('should return 0 when both rows have the same assetClass "Credit"', () => {
      const rowA: FinancialRow = { assetClass: 'Credit' };
      const rowB: FinancialRow = { assetClass: 'Credit' };
      expect(sortByAssetClass(rowA, rowB)).toBe(0); // Same assetClass "Credit"
    });
  
    it('should handle undefined assetClass by treating it as the lowest priority (index 99)', () => {
      const rowA: FinancialRow = {}; // undefined assetClass
      const rowB: FinancialRow = { assetClass: 'Equities' };
      expect(sortByAssetClass(rowA, rowB)).toBeGreaterThan(0); // undefined assetClass comes after "Equities"
  
      const rowC: FinancialRow = {}; // undefined assetClass
      const rowD: FinancialRow = {}; // undefined assetClass
      expect(sortByAssetClass(rowC, rowD)).toBe(0); // Both rows have undefined assetClass, should return 0
    });
  });

describe('sortByPrice', () => {
  it('should return a negative number when price of A is less than price of B', () => {
    const rowA = { price: 10 };
    const rowB = { price: 20 };
    expect(sortByPrice(rowA, rowB)).toBeLessThan(0);
  });

  it('should return a positive number when price of A is greater than price of B', () => {
    const rowA = { price: 30 };
    const rowB = { price: 10 };
    expect(sortByPrice(rowA, rowB)).toBeGreaterThan(0);
  });

  it('should return 0 when both prices are the same', () => {
    const rowA = { price: 20 };
    const rowB = { price: 20 };
    expect(sortByPrice(rowA, rowB)).toBe(0);
  });
});

describe('sortByTicker', () => {
  it('should return a negative number when ticker of A is alphabetically before ticker of B', () => {
    const rowA = { ticker: 'AAPL' };
    const rowB = { ticker: 'MSFT' };
    expect(sortByTicker(rowA, rowB)).toBeLessThan(0);
  });

  it('should return a positive number when ticker of A is alphabetically after ticker of B', () => {
    const rowA = { ticker: 'MSFT' };
    const rowB = { ticker: 'AAPL' };
    expect(sortByTicker(rowA, rowB)).toBeGreaterThan(0);
  });

  it('should return 0 when both tickers are the same', () => {
    const rowA = { ticker: 'AAPL' };
    const rowB = { ticker: 'AAPL' };
    expect(sortByTicker(rowA, rowB)).toBe(0);
  });
});

describe('sortStrategies', () => {
  it('should correctly use sortByAssetClass when sorting by assetClass', () => {
    const rowA: FinancialRow = { assetClass: 'Macro' };
    const rowB: FinancialRow = { assetClass: 'Equities' };
    expect(sortStrategies.assetClass(rowA, rowB)).toBeGreaterThan(0); // "Macro" should come after "Equities"
  });

  it('should correctly use sortByPrice when sorting by price', () => {
    const rowA = { price: 10 };
    const rowB = { price: 20 };
    expect(sortStrategies.price(rowA, rowB)).toBeLessThan(0); // 10 should come before 20
  });

  it('should correctly use sortByTicker when sorting by ticker', () => {
    const rowA = { ticker: 'AAPL' };
    const rowB = { ticker: 'MSFT' };
    expect(sortStrategies.ticker(rowA, rowB)).toBeLessThan(0); // "AAPL" should come before "MSFT"
  });
});
