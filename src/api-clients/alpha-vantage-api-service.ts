import {ISearchResults} from '../models/alpha-vantage-api-models';
import {
  mockBalanceSheet,
  mockCashFlow,
  mockEarnings,
  mockIncomeStatement,
  mockOverview,
  mockSearchResults,
} from 'mock/alpha-vantage-mock';
import dataProvider from '../services/dataProvider';

/**
 * Alpha Vantage API Interface
 *
 * @example
 * import AlphaVantageAPIService from './api-clients/alpha-vantage-api-service';
 * AlphaVantageAPIService.getBalanceSheet(settings.ALPHA_VTANGE_API_KEY, "");
 */
class AlphaVantageAPIService {
  static apiKey: string = process.env.REACT_APP_ALPHA_VANTAGE_API_KEY || '';
  static isDevMode: boolean = !!process.env.REACT_APP_ENABLE_MOCK_DATA;

  /**
   * @description Send the request to the Alpha Vantage API
   * @param {string} url - The url to hit
   */
  static sendRequest(url: string): Promise<any> {
    return fetch(url)
      .then((response) => response.json())
      .catch((Error) => console.error(Error));
  }

  /**
   * @description Wrapper function to obtains Quarterly
   * and Annual Balance Sheet Reports
   * @param {string} apiKey
   * @param {string} tickerSymbol - A Ticker Symbol
   */
  static getBalanceSheet(tickerSymbol: string): void {
    const url: string =
      `https://www.alphavantage.co/query?function=BALANCE_SHEET&symbol=IBM&apikey=demo`;
    if (AlphaVantageAPIService.isDevMode) {
      dataProvider.balanceSheetStatement.next(mockBalanceSheet);
    } else {
      AlphaVantageAPIService.sendRequest(url)
        .then((val) => dataProvider.balanceSheetStatement.next(val));
    }
  }

  /**
   * @description Wrapper function to obtain Quarterly
   * and Annual Cash Flow Reports
   * @param {string} apiKey
   * @param {string} tickerSymbol - A Ticker Symbol
   */
  static getCashFlow(tickerSymbol: string): void {
    const url: string =
      `https://www.alphavantage.co/query?function=CASH_FLOW&symbol=IBM&apikey=demo`;
    if (AlphaVantageAPIService.isDevMode) {
      dataProvider.cashFlowStatement.next(mockCashFlow);
    } else {
      AlphaVantageAPIService.sendRequest(url)
        .then((val) => dataProvider.cashFlowStatement.next(val));
    }
  }

  /**
   * @description Obtains Quarterly and Annual Icome Statement Reports
   * @param {string} apiKey
   * @param {string} tickerSymbol - A Ticker Symbol
   */
  static getIncomeStatement(tickerSymbol: string): void {
    const url: string = 
      `https://www.alphavantage.co/query?function=INCOME_STATEMENT&symbol=IBM&apikey=demo`;
    if (AlphaVantageAPIService.isDevMode) {
      dataProvider.incomeStatement.next(mockIncomeStatement);
    } else {
      AlphaVantageAPIService.sendRequest(url)
        .then((val) => dataProvider.incomeStatement.next(val));
    }
  }

  /**
   * @description Obtains a summary of the security
   * @param {string} apiKey
   * @param {string} tickerSymbol - A Ticker Symbol
   */
  static getCompanyOverview(tickerSymbol: string): void {
    const url: string = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${tickerSymbol}&apikey=${AlphaVantageAPIService.apiKey}`;
    if (AlphaVantageAPIService.isDevMode) {
      dataProvider.overview.next(mockOverview);
    } else {
      AlphaVantageAPIService.sendRequest(url)
        .then((val) => dataProvider.overview.next(val));
    }
  }

  /**
   * @description Obtains the company Earnings
   * @param {string} apiKey
   * @param {string} tickerSymbol - A Ticker Symbol
   */
  static getEarnings(tickerSymbol: string): void {
    const url: string = `https://www.alphavantage.co/query?function=EARNINGS&symbol=${tickerSymbol}&apikey=${AlphaVantageAPIService.apiKey}`;
    if (AlphaVantageAPIService.isDevMode) {
      dataProvider.earnings.next(mockEarnings);
    } else {
      AlphaVantageAPIService.sendRequest(url)
        .then((val) => dataProvider.earnings.next(val));
    }
  }

  /**
   * @description Performs a search for a security
   * @param {string} apiKey
   * @param {string} searchTerm - A ticker symbol or name of security
   */
  static search(searchTerm: string): Promise<ISearchResults> {
    const url: string = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${searchTerm}&apikey=${AlphaVantageAPIService.apiKey}`;
    if (AlphaVantageAPIService.isDevMode) {
      return Promise.resolve(mockSearchResults);
    } else {
      return AlphaVantageAPIService.sendRequest(url);
    }
  }
}

export default AlphaVantageAPIService;
