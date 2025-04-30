import { getRowBackgroundColor, getCellClassName } from './financialInstrumentsStyle';
import { useFinancialInstruments } from '../../api/useFinancialInstruments';
import { FinancialTable } from '../FinancialTable/FinancialTable';


const columns = [
    { field: 'assetClass', headerName: 'Asset Class' },
    { field: 'ticker', headerName: 'Ticker' },
    { field: 'price', headerName: 'Price' },
];

export const FinancialInstruments = () => {
    const financialData = useFinancialInstruments();

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
