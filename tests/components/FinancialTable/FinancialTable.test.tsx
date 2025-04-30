import React from 'react';
import { render, screen } from '@testing-library/react';
import {FinancialTable} from '../../../src/components/FinancialTable/FinancialTable';

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

test('renders table with headers and rows', () => {
  render(<FinancialTable columns={columns} rowData={rowData} />);

  expect(screen.getByRole('table')).toBeInTheDocument();

  columns.forEach((col) => {
    expect(screen.getByText(col.headerName)).toBeInTheDocument();
  });

  rowData.forEach((row) => {
    expect(screen.getByText(row.ticker)).toBeInTheDocument();
  });
});

