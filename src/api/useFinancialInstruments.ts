import { useState, useEffect } from "react";
import { FinancialRow } from "../utils/sortFinancialData";

const API_URL = "/mockData/financialInstruments.json";

export const useFinancialInstruments = () => {
  const [data, setData] = useState<FinancialRow[]>([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((fetchedData) => setData(fetchedData))
      .catch((error) => console.error("Failed to fetch financial data", error));
  }, []);

  return data;
};
