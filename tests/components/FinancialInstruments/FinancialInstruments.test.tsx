import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FinancialInstruments } from '../../../src/components/FinancialInstruments/FinancialInstruments';
import * as dataHook from '../../../src/api/useFinancialData';
import { FinancialTable } from '../../../src/components/FinancialTable/FinancialTable';
import React from 'react';

describe('FinancialInstruments', () => {
  const mockData = [
    { assetClass: 'Macro', ticker: 'MSFT', price: 100 },
    { assetClass: 'Equities', ticker: 'AAPL', price: 200 },
  ];

  beforeEach(() => {
    vi.spyOn(dataHook, 'useFinancialData').mockReturnValue(mockData);
  });

  it('renders heading', () => {
    render(<FinancialInstruments />);
    expect(screen.getByText('Financial Instruments')).toBeInTheDocument();
  });

});
