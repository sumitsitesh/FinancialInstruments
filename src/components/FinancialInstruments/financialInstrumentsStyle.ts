import { FinancialRow } from "../../utils/sortFinancialData";
import styles from "./FinancialInstruments.module.css";

export const getRowBackgroundColor = (row: FinancialRow) => {
  switch (row.assetClass?.toLowerCase()) {
    case "macro":
      return styles.rowMacro;
    case "equities":
      return styles.rowEquities;
    case "credit":
      return styles.rowCredit;
    default:
      return styles.rowDefault;
  }
};

export const getCellClassName = (field: string, value: number) => {
  if (field === "price") {
    return value >= 0 ? styles.pricePositive : styles.priceNegative;
  }
  return "";
};
