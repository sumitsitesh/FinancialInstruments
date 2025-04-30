import { useState, useEffect } from "react";

interface FinancialInstrument {
  ticker: string;
  price: number;
  assetClass: string;
}

const API_URL = "/mockData/financialInstruments.json";

export const useFinancialData = () => {
  const [data, setData] = useState<FinancialInstrument[]>([]);

  useEffect(() => {
    fetch(API_URL) 
      .then((res) => res.json())
      .then((fetchedData) => setData(fetchedData))
      .catch((error) => console.error("Failed to fetch financial data", error));
  }, []);

  return data;
};
