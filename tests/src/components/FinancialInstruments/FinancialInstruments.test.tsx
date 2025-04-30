import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { FinancialInstruments } from '../../../../src/components/FinancialInstruments/FinancialInstruments';
import * as dataHook from '../../../../src/api/useFinancialInstruments';
import React from 'react';

describe('FinancialInstruments', () => {
    const mockData = [
        { assetClass: 'Macro', ticker: 'MSFT', price: 100 },
        { assetClass: 'Equities', ticker: 'AAPL', price: 200 },
    ];

    beforeEach(() => {
        vi.spyOn(dataHook, 'useFinancialInstruments').mockReturnValue(mockData);
    });

    it('renders heading', () => {
       const {getByText}= render(<FinancialInstruments />);
       const heading = getByText('Financial Instruments')
        expect(heading).toBeInTheDocument();
    });

});
