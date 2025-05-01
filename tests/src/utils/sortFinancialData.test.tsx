import { describe, it, expect } from 'vitest';
import { FinancialRow } from '../../../src/utils/sortFinancialData'; 
import { sortByAssetClass, sortByPrice, sortByTicker, sortStrategies } from '../../../src/utils/sortFinancialData';


describe('sortByAssetClass', () => {

    it('should return a positive value when assetClass "Macro" is compared with "Equities"', () => {
        const rowA: FinancialRow = {
            assetClass: 'Macro',
            price: 0,
            ticker: ''
        };
        const rowB: FinancialRow = {
            assetClass: 'Equities',
            price: 0,
            ticker: ''
        };
        expect(sortByAssetClass(rowA, rowB)).toBeGreaterThan(0); 
    });

    it('should return a positive value when assetClass "Credit" is compared with "Equities"', () => {
        const rowA: FinancialRow = {
            assetClass: 'Credit',
            price: 0,
            ticker: ''
        };
        const rowB: FinancialRow = {
            assetClass: 'Equities',
            price: 0,
            ticker: ''
        };
        expect(sortByAssetClass(rowA, rowB)).toBeGreaterThan(0);
    });

    it('should return 0 when both rows have the same assetClass', () => {
        const rowA: FinancialRow = {
            assetClass: 'Equities',
            price: 0,
            ticker: ''
        };
        const rowB: FinancialRow = {
            assetClass: 'Equities',
            price: 0,
            ticker: ''
        };
        expect(sortByAssetClass(rowA, rowB)).toBe(0);
    });

    it('should handle undefined assetClass by treating it as the lowest priority (index 99)', () => {
        const rowA: FinancialRow = {
            assetClass: '',
            price: 0,
            ticker: ''
        };
        const rowB: FinancialRow = {
            assetClass: 'Equities',
            price: 0,
            ticker: ''
        };
        expect(sortByAssetClass(rowA, rowB)).toBeGreaterThan(0);

        const rowC: FinancialRow = {
            assetClass: '',
            price: 0,
            ticker: ''
        }; 
        const rowD: FinancialRow = {
            assetClass: '',
            price: 0,
            ticker: ''
        };
        expect(sortByAssetClass(rowC, rowD)).toBe(0); 
    });
});

describe('sortByPrice', () => {
    it('should return a negative number when price of A is less than price of B', () => {
        const rowA = { price: 10,assetClass:'Equities', ticker:'AA' };
        const rowB = { price: 20,assetClass:'Equities', ticker:'AA' };
        expect(sortByPrice(rowA, rowB)).toBeLessThan(0);
    });

    it('should return a positive number when price of A is greater than price of B', () => {
        const rowA = { price: 30,assetClass:'Equities', ticker:'AA' };
        const rowB = { price: 10,assetClass:'Equities', ticker:'AA' };
        expect(sortByPrice(rowA, rowB)).toBeGreaterThan(0);
    });

    it('should return 0 when both prices are the same', () => {
        const rowA = { price: 20,assetClass:'Equities', ticker:'AA' };
        const rowB = { price: 20,assetClass:'Equities', ticker:'AA' };
        expect(sortByPrice(rowA, rowB)).toBe(0);
    });
});

describe('sortByTicker', () => {
    it('should return a negative number when ticker of A is alphabetically before ticker of B', () => {
        const rowA = {price: 20,assetClass:'Equities', ticker: 'AAPL' };
        const rowB = {price: 20,assetClass:'Equities', ticker: 'MSFT' };
        expect(sortByTicker(rowA, rowB)).toBeLessThan(0);
    });

    it('should return a positive number when ticker of A is alphabetically after ticker of B', () => {
        const rowA = {price: 20,assetClass:'Equities', ticker: 'MSFT' };
        const rowB = {price: 20,assetClass:'Equities', ticker: 'AAPL' };
        expect(sortByTicker(rowA, rowB)).toBeGreaterThan(0);
    });

    it('should return 0 when both tickers are the same', () => {
        const rowA = { price: 20,assetClass:'Equities',ticker: 'AAPL' };
        const rowB = { price: 20,assetClass:'Equities',ticker: 'AAPL' };
        expect(sortByTicker(rowA, rowB)).toBe(0);
    });
});

describe('sortStrategies', () => {
    it('should correctly use sortByAssetClass when sorting by assetClass', () => {
        const rowA: FinancialRow = {
            assetClass: 'Macro',
            price: 0,
            ticker: ''
        };
        const rowB: FinancialRow = {
            assetClass: 'Equities',
            price: 0,
            ticker: ''
        };
        expect(sortStrategies.assetClass(rowA, rowB)).toBeGreaterThan(0);
    });

    it('should correctly use sortByPrice when sorting by price', () => {
        const rowA = { price: 10,assetClass:'Equities', ticker: 'AAPL' };
        const rowB = { price: 20 ,assetClass:'Equities', ticker: 'AAPL'};
        expect(sortStrategies.price(rowA, rowB)).toBeLessThan(0);
    });

    it('should correctly use sortByTicker when sorting by ticker', () => {
        const rowA = {price: 10,assetClass:'Equities', ticker: 'AAPL' };
        const rowB = { price: 10,assetClass:'Equities',ticker: 'MSFT' };
        expect(sortStrategies.ticker(rowA, rowB)).toBeLessThan(0); 
    });
});
