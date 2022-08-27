import {useEffect} from 'react';
import {LinearProgress} from '@material-ui/core';
import {IBaseProps} from 'models/models';
import {IOverview} from 'models/alpha-vantage-api-models';
import useData, {EDataProviderKeys} from 'hooks/useData';
import AlphaVantageAPIService from 'api-clients/alpha-vantage-api-service';

/**
 * @description A component to display summary information
 * @example
 *    <Summary style={{}} />
 */
function Summary({style}: IBaseProps): JSX.Element {
  const symbol = useData<string>(EDataProviderKeys.SYMBOL);
  const data = useData<IOverview>(EDataProviderKeys.SUMMARY);
  useEffect(() => {
    if (symbol !== undefined) {
      AlphaVantageAPIService.getCompanyOverview(symbol);
    }
  }, [symbol]);
  return (
    <div style={style.overlay}>
      <h1 style={style.text}>Summary</h1>
      {
        data ? (
          <div>
            <div style={style.flexStart}>
              <h3 style={style.header}>
                <a
                  style={style.link}
                  href={data.website}
                  target="_blank"
                  rel="noopener noreferrer">
                  {data.companyName} ({data.symbol})
                </a>
              </h3>
            </div>
            <h4>Description</h4>
            <div>{data.Description}</div>
            <h4>Industry</h4>
            <div>{data.Industry}</div>
            <h4>Sector</h4>
            <div>{data.Sector}</div>
            <h4>Stats:</h4>
            <div style={style.flex}>
              <div>
                <div>PE Ratio: {data.TrailingPE}</div>
                <div>PEG Ratio: {data.PEGRatio}</div>
                <div>Book Value: {data.BookValue}</div>
                <div>Dividend Yield: {data.DividendYield}</div>
              </div>
              <div>
                <div>EPS: {data.EPS}</div>
                <div>Reutrn on Assets: {data.ReturnOnAssetsTTM}</div>
                <div>Return on Equity: {data.ReturnOnEquityTTM}</div>
                <div>Quarterly Earnings Growth YOY: {data.QuarterlyEarningsGrowthYOY}</div>
              </div>
              <div>
                <div>Quarterly Revenue Growth YOY: {data.QuarterlyRevenueGrowthYOY}</div>
                <div>PS Ratio: {data.PriceToSalesRatioTTM}</div>
                <div>PB Ratio: {data.PriceToBookRatio}</div>
                <div>Beta: {data.Beta}</div>
              </div>
            </div>
          </div>
        ) :
          (<LinearProgress style={style.progressBar} />)
      }
    </div>
  );
};

export default Summary;
