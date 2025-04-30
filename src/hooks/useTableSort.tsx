import { useState } from 'react';
import { SortDirection,sortStrategies } from '../utils/sortFinancialData';

type SortConfig = {
  key: string;
  direction: SortDirection;
};

export const useTableSort = (defaultKey: string) => {
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: defaultKey,
    direction: 'asc'
  });

  const handleSort = (key: string) => {
    setSortConfig(prev => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc'
    }));
  };

  const getSortArrow = (key: string) => {
    if (sortConfig.key !== key) return null;
    return sortConfig.direction === 'asc' ? '▲' : '▼';
  };

  const sortData = (rowData: any[]) => {
    const sortableItems = [...rowData];
    const sortFunction = sortStrategies[sortConfig.key];
    if (sortFunction) {
      sortableItems.sort((a, b) => {
        const result = sortFunction(a, b);
        return sortConfig.direction === 'asc' ? result : -result;
      });
    }
    return sortableItems;
  };

  return { sortConfig, handleSort, getSortArrow, sortData };
};
