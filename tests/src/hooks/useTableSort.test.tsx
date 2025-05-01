import { renderHook, act } from '@testing-library/react';
import { describe, expect, it,vi } from 'vitest';
import { useTableSort } from '../../../src/hooks/useTableSort';

type TestRow = {
  price: number;
  ticker: string;
};

const mockSortStrategies = {
  price: (a: TestRow, b: TestRow) => a.price - b.price,
  ticker: (a: TestRow, b: TestRow) => a.ticker.localeCompare(b.ticker),
};

vi.mock('../utils/sortFinancialData', () => ({
  sortStrategies: mockSortStrategies,
}));

const testData: TestRow[] = [
  { price: 300, ticker: 'AAPL' },
  { price: 100, ticker: 'MSFT' },
  { price: 200, ticker: 'GOOG' },
];

describe('useTableSort', () => {
  it('should sort data by price ascending and descending', () => {
    const { result } = renderHook(() => useTableSort('price'));

    let sorted = result.current.sortData(testData);
    expect(sorted[0].price).toBe(100);
    expect(sorted[2].price).toBe(300);

    act(() => result.current.handleSort('price'));
    sorted = result.current.sortData(testData);
    expect(sorted[0].price).toBe(300);
    expect(sorted[2].price).toBe(100);
  });

  it('should change sorting column and reset to ascending', () => {
    const { result } = renderHook(() => useTableSort('price'));

    act(() => result.current.handleSort('ticker'));
    expect(result.current.sortConfig.key).toBe('ticker');
    expect(result.current.sortConfig.direction).toBe('asc');

    const sorted = result.current.sortData(testData);
    expect(sorted[0].ticker).toBe('AAPL');
    expect(sorted[2].ticker).toBe('MSFT');
  });

  it('should return correct arrow for active column', () => {
    const { result } = renderHook(() => useTableSort('price'));

    expect(result.current.getSortArrow('price')).toBe('▲');

    act(() => result.current.handleSort('price'));
    expect(result.current.getSortArrow('price')).toBe('▼');

    expect(result.current.getSortArrow('ticker')).toBe(null);
  });
});
