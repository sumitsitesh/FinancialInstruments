import React from 'react';
import { describe, expect } from 'vitest';
import { render } from '@testing-library/react';
import { FinancialTable } from '../../../../src/components/FinancialTable/FinancialTable';

const columns = [
  { field: 'ticker', headerName: 'Ticker' },
  { field: 'price', headerName: 'Price' },
  { field: 'assetClass', headerName: 'Asset Class' },
];

const rowData = [
  { ticker: 'AAPL', price: 150, assetClass: 'Equities' },
  { ticker: 'GOOGL', price: 2800, assetClass: 'Equities' },
  { ticker: 'US10Y', price: 1.5, assetClass: 'Macro' },
];

describe('useTableSort', () => {
  test('renders table with headers and rows', () => {
    const { getByRole, getByText } = render(<FinancialTable columns={columns} rowData={rowData} />);

    const table = getByRole('table')
    expect(table).toBeInTheDocument();

    columns.forEach((col) => {
      expect(getByText(col.headerName)).toBeInTheDocument();
    });

    rowData.forEach((row) => {
      expect(getByText(row.ticker)).toBeInTheDocument();
    });
  });
})

