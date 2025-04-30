// tests/hooks/useFinancialData.test.ts
import { renderHook, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import { useFinancialData } from '../../src/api/useFinancialData';

const mockData = [
  { ticker: 'AAPL', price: 150, assetClass: 'Equities' },
  { ticker: 'US10Y', price: 1.5, assetClass: 'Macro' },
];

describe('useFinancialData', () => {
  beforeEach(() => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockData),
      })
    ) as unknown as typeof fetch;
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it('fetches and returns financial data', async () => {
    const { result } = renderHook(() => useFinancialData());

    await waitFor(() => {
      expect(result.current.length).toBeGreaterThan(0);
    });

    expect(result.current).toEqual(mockData);
    expect(fetch).toHaveBeenCalledWith('/mockData/financialInstruments.json');
  });
});
