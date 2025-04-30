import { useFinancialData } from '../../api/useFinancialData';
import { FinancialTable } from '../FinancialTable/FinancialTable';
import { getRowBackgroundColor, getCellClassName } from './financialInstrumentsStyle';

const columns = [
    { field: 'assetClass', headerName: 'Asset Class' },
    { field: 'ticker', headerName: 'Ticker' },
    { field: 'price', headerName: 'Price' },
];

export const FinancialInstruments = () => {
    const financialData = useFinancialData();

    return (
        <div>
            <h2>Financial Instruments</h2>
            <FinancialTable columns={columns}
                rowData={financialData}
                getRowClassName={getRowBackgroundColor}
                getCellClassName={getCellClassName} />
        </div>
    );
};
