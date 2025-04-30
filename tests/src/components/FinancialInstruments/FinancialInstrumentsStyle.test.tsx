import { getCellClassName,getRowBackgroundColor } from '../../../../src/components/FinancialInstruments/financialInstrumentsStyle'
import styles from '../../../../src/components/FinancialInstruments/FinancialInstruments.module.css'

describe('getRowBackgroundColor', () => {
  it('should return rowMacro when assetClass is "macro"', () => {
    const row = { assetClass: 'macro',price:10, ticker:'AA' };
    const result = getRowBackgroundColor(row);
    expect(result).toBe(styles.rowMacro);
  });

  it('should return rowEquities when assetClass is "equities"', () => {
    const row = { assetClass: 'equities',price:10, ticker:'AA' };
    const result = getRowBackgroundColor(row);
    expect(result).toBe(styles.rowEquities);
  });

  it('should return rowCredit when assetClass is "credit"', () => {
    const row = { assetClass: 'credit',price:10, ticker:'AA' };
    const result = getRowBackgroundColor(row);
    expect(result).toBe(styles.rowCredit);
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
});
