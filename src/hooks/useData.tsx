import {useState, useEffect} from 'react';
import dataProvider from 'services/dataProvider';

export enum EDataProviderKeys {
  SYMBOL = 'symbol',
  BALANCE_SHEET_STATEMENT = 'balanceSheetStatement',
  CASH_FLOW_STATEMENT = 'cashFlowStatement',
  INCOME_STATEMENT = 'incomeStatement',
  SUMMARY = 'summary',
  EARNINGS = 'earnings',
  SEARCH_RESULTS = 'searchResults',
}

/**
 * @description A hook to make using the dataProvider service super easy.
 *    Availible arguments are generated from the properties of the data provider
 *    service.
 * @see dataProvider
 * @example
 *    import useData from 'hooks/useData';
 *    const data = useData(EDataProviderKeys.COMPANY_SUMMARY);
 * @param {string} propName - The name of a property on the
 * dataProvider service.
 */
export default function useData<T>(propName: EDataProviderKeys): T | undefined {
  const [data, setData] = useState<T>();
  useEffect(() => {
    const dataProviderKeys = Object.keys(dataProvider);
    const foundName =
      dataProviderKeys.find((key) => key === propName) ?? '';
    const subscription = dataProvider[foundName].subscribe(setData);
    return () => subscription.unsubscribe();
  }, [propName]);

  return data;
}

/**
 * @description A hook to make using the dataProvider service super easy.
 *    Availible arguments are generated from the properties of the data provider
 *    service.
 * @see dataProvider
 * @example
 *    import useData from 'hooks/useData';
 *    const data = useData(EDataProviderKeys.COMPANY_SUMMARY);
 * @param {string} data - An observable to subscribe to.
 */
 export function useTest<T>(obs: any): T | undefined {
  const [data, setData] = useState<T>();
  useEffect(() => {
    const subscription = obs.subscribe(setData);
    return () => subscription.unsubscribe();
  }, [obs]);

  return data;
}