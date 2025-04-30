import { renderHook, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import { useFinancialInstruments } from '../../../src/api/useFinancialInstruments';

const mockData = [
  { ticker: 'AAPL', price: 150, assetClass: 'Equities' },
  { ticker: 'US10Y', price: 1.5, assetClass: 'Macro' },
];

describe('useFinancialInstruments', () => {
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
    const { result } = renderHook(() => useFinancialInstruments());

    await waitFor(() => {
      expect(result.current.length).toBeGreaterThan(0);
    });

    expect(result.current).toEqual(mockData);
    expect(fetch).toHaveBeenCalledWith('/mockData/financialInstruments.json');
  });
});
