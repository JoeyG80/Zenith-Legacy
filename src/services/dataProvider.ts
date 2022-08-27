import {Subject} from 'rxjs';
import {
  IBalanceSheetStatement,
  ICashFlowStatement,
  IIncomeStatement,
  IOverview,
  IEarnings,
} from 'models/alpha-vantage-api-models';

interface IDataProvider {
  [key: string]: any;
  symbol: Subject<string>;
  balanceSheetStatement: Subject<IBalanceSheetStatement>;
  cashFlowStatement: Subject<ICashFlowStatement>;
  incomeStatement: Subject<IIncomeStatement>;
  summary: Subject<IOverview>;
  earnings: Subject<IEarnings>;
}

/**
 * @description
 *  A provider for api data. When api clients are called,
 *  data will automatically be updated. Utilizes rxjs for
 *  this behavour. The @see useData hook can be used in order
 *  to make use of the data.
 * @example
 *  In API Client:
 *  AlphaVantageAPIService.sendRequest(url)
 *      .then((val) => dataProvider.incomeStatement.next(val));
 */
const DATA_PROVIDER = Object.freeze({
  symbol: new Subject(),
  balanceSheetStatement: new Subject(),
  cashFlowStatement: new Subject(),
  incomeStatement: new Subject(),
  summary: new Subject(),
  earnings: new Subject(),
});

export default DATA_PROVIDER as IDataProvider;
