import React, {useEffect} from 'react';
import {LinearProgress} from '@material-ui/core';
import {NO_DRAG} from 'utils/common-utils';
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
      <h1 className={NO_DRAG} style={style.text}>Summary</h1>
      {
        data ? (
          <>
            <div style={style.flexStart}>
              <h3 className={NO_DRAG} style={style.header}>
                <a
                  style={style.link}
                  href={data.website}
                  target="_blank"
                  rel="noopener noreferrer">
                  {data.companyName} ({data.symbol})
                </a>
              </h3>
            </div>
            <h4 className={NO_DRAG} style={style.text}>
              Description
            </h4>
            <div className={NO_DRAG} style={style.text}>
              {data.Description}
            </div>
            <h4 className={NO_DRAG} style={style.text}>
              Industry
            </h4>
            <div className={NO_DRAG} style={style.text}>
              {data.Industry}
            </div>
            <h4 className={NO_DRAG} style={style.text}>
              Sector
            </h4>
            <div className={NO_DRAG} style={style.text}>
              {data.Sector}
            </div>
            <h4 className={NO_DRAG} style={style.text}>Stats: TODO</h4>
          </>
        ) :
          (<LinearProgress style={style.progressBar} />)
      }
    </div>
  );
};

export default Summary;
