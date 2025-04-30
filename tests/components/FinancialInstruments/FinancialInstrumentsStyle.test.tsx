import { getRowBackgroundColor, getCellClassName } from '../../../src/components/FinancialInstruments/FinancialInstrumentsStyle';
import styles from '../../../src/components/FinancialInstruments/FinancialInstruments.module.css'; // Assuming styles is imported here

describe('getRowBackgroundColor', () => {
  it('should return rowMacro when assetClass is "macro"', () => {
    const row = { assetClass: 'macro' };
    const result = getRowBackgroundColor(row);
    expect(result).toBe(styles.rowMacro);
  });

  it('should return rowEquities when assetClass is "equities"', () => {
    const row = { assetClass: 'equities' };
    const result = getRowBackgroundColor(row);
    expect(result).toBe(styles.rowEquities);
  });

  it('should return rowCredit when assetClass is "credit"', () => {
    const row = { assetClass: 'credit' };
    const result = getRowBackgroundColor(row);
    expect(result).toBe(styles.rowCredit);
  });

  it('should return rowDefault when assetClass is undefined or unknown', () => {
    const row = { assetClass: 'unknown' };
    const result = getRowBackgroundColor(row);
    expect(result).toBe(styles.rowDefault);

    const rowWithNoAssetClass = {};
    const resultNoClass = getRowBackgroundColor(rowWithNoAssetClass);
    expect(resultNoClass).toBe(styles.rowDefault);
  });
});

describe('getCellClassName', () => {
  it('should return pricePositive when price is >= 0', () => {
    const result = getCellClassName('price', 10);
    expect(result).toBe(styles.pricePositive);
  });

  it('should return priceNegative when price is < 0', () => {
    const result = getCellClassName('price', -10);
    expect(result).toBe(styles.priceNegative);
  });

  it('should return an empty string when field is not "price"', () => {
    const result = getCellClassName('notPrice', 10);
    expect(result).toBe('');
  });
});
