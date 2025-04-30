import { useTableSort } from '../../hooks/useTableSort';
import styles from './FinancialTable.module.css'
import { useMemo } from 'react';

interface FinancialTableProps<T extends Record<string, unknown>> {
  columns: { field: string; headerName: string }[];
  rowData: T[];
  getRowClassName?: (row: T) => string;
  getCellClassName?: (field: string, value: number) => string;
}

export const FinancialTable = <T extends Record<string, unknown>>({
  columns,
  rowData,
  getRowClassName,
  getCellClassName,
}: FinancialTableProps<T>) => {
  const { sortConfig, handleSort, getSortArrow, sortData } = useTableSort(columns[0].field);

  const sortedData = useMemo(() => sortData(rowData), [rowData, sortConfig]);

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={col.field}
                className={styles.th}
                onClick={() => handleSort(col.field)}
              >
                <span style={{ marginRight: 6 }}>{col.headerName}</span>
                <span style={{ fontSize: '0.7em', color: '#666' }}>{getSortArrow(col.field)}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, index) => {
            const rowClassName = getRowClassName ? getRowClassName(row) : styles.rowDefault;

            return (
              <tr key={index} className={rowClassName}>
                {columns.map((col) => {
                  const cellValue = row[col.field];
                  const cellClassName = getCellClassName ? getCellClassName(col.field, cellValue) : '';

                  return (
                    <td key={col.field} className={`${styles.td} ${cellClassName}`}>
                      {cellValue}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
