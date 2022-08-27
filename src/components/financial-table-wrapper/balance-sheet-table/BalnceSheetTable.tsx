import {useEffect} from 'react';
import {
  LinearProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@material-ui/core';
import {handleStringToNumberWithSuffix} from 'utils/common-utils';
import {IBalanceSheetReport, IBalanceSheetStatement} from 'models/alpha-vantage-api-models';
import AlphaVantageAPIService from 'api-clients/alpha-vantage-api-service';
import {IFinancialsStatementsProps} from 'models/models';
import useData, {EDataProviderKeys} from 'hooks/useData';

/**
 * @description A table component to display an income statement
 * @example
 *    <BalanceSheetTable
 *      style={mergedStyles}
 *      tableData={testTableData} />
 */
function BalanceSheetTable({
  style,
  isIncomeAnnualOrQuarterly,
}: IFinancialsStatementsProps): JSX.Element {
  const data =
    useData<IBalanceSheetStatement>(EDataProviderKeys.BALANCE_SHEET_STATEMENT);
  const symbol = useData<string>(EDataProviderKeys.SYMBOL);
  let trimmedData: IBalanceSheetReport[] = [];
  if (data) {
    trimmedData = isIncomeAnnualOrQuarterly
      ? data.annualReports
      : data.quarterlyReports;
    trimmedData = trimmedData.slice(0, 5);
  }

  // Grab Balance sheet data
  useEffect(() => {
    if (symbol !== undefined) {
      AlphaVantageAPIService.getBalanceSheet(symbol);
    }
  }, [symbol]);
  return (
    <>
      {
        data ? (
          <TableContainer>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell style={style.materialTableRow}></TableCell>
                  <TableCell style={style.materialTableRow}>
                    {trimmedData[0].fiscalDateEnding}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {trimmedData[1].fiscalDateEnding}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {trimmedData[2].fiscalDateEnding}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {trimmedData[3].fiscalDateEnding}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={style.materialTableRow}>
                    Cash
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[0].cash)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[1].cash)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[2].cash)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[3].cash)}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={style.materialTableRow}>
                    Cash and Short Term Investments
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[3].shortTermInvestments)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[3].shortTermInvestments)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[3].shortTermInvestments)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[3].shortTermInvestments)}
                  </TableCell>
                </TableRow>
                <TableRow style={style.totalRow}>
                  <TableCell style={style.materialTableRow}>
                    Cash and Short Term Investments
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[3].cashAndShortTermInvestments)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[3].cashAndShortTermInvestments)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[3].cashAndShortTermInvestments)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[3].cashAndShortTermInvestments)}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={style.materialTableRow}>
                    Net Receivables
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[0].netReceivables)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[1].netReceivables)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[2].netReceivables)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[3].netReceivables)}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={style.materialTableRow}>
                    Inventory
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[0].inventory)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[1].inventory)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[2].inventory)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[3].inventory)}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={style.materialTableRow}>
                    Other Current Assets
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[0].otherCurrentAssets)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[1].otherCurrentAssets)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[2].otherCurrentAssets)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[3].otherCurrentAssets)}
                  </TableCell>
                </TableRow>
                <TableRow style={style.totalRow}>
                  <TableCell style={style.materialTableRow}>
                    Total Current Assets
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[0].totalCurrentAssets)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[1].totalCurrentAssets)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[2].totalCurrentAssets)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[3].totalCurrentAssets)}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={style.materialTableRow}>
                    Property, Plant Equipment
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[0].propertyPlantEquipment)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[1].propertyPlantEquipment)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[2].propertyPlantEquipment)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[3].propertyPlantEquipment)}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={style.materialTableRow}>
                    IntangibleAssets
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[0].intangibleAssets)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[1].intangibleAssets)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[2].intangibleAssets)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[3].intangibleAssets)}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={style.materialTableRow}>
                    Good Will
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[0].goodwill)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[1].goodwill)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[2].goodwill)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[3].goodwill)}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={style.materialTableRow}>
                    Long Term Investments
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[0].longTermInvestments)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[1].longTermInvestments)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[2].longTermInvestments)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[3].longTermInvestments)}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={style.materialTableRow}>
                    Other Non-Current Assets
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[0].otherNonCurrrentAssets)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[1].otherNonCurrrentAssets)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[2].otherNonCurrrentAssets)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[3].otherNonCurrrentAssets)}
                  </TableCell>
                </TableRow>
                <TableRow style={style.subTotalRow}>
                  <TableCell style={style.materialTableRow}>
                    Total Non-Current Assets
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[0].totalNonCurrentAssets)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[1].totalNonCurrentAssets)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[2].totalNonCurrentAssets)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[3].totalNonCurrentAssets)}
                  </TableCell>
                </TableRow>
                <TableRow style={style.totalRow}>
                  <TableCell style={style.materialTableRow}>
                    Total Assets
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[0].totalAssets)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[1].totalAssets)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[2].totalAssets)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[3].totalAssets)}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={style.materialTableRow}>
                    Short Term Debt
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[0].shortTermDebt)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[1].shortTermDebt)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[2].shortTermDebt)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[3].shortTermDebt)}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={style.materialTableRow}>
                    Accounts Payable
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[0].accountsPayable)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[1].accountsPayable)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[2].accountsPayable)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[3].accountsPayable)}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={style.materialTableRow}>
                    Other Current Liabilities
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[0].otherCurrentLiabilities)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[1].otherCurrentLiabilities)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[2].otherCurrentLiabilities)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[3].otherCurrentLiabilities)}
                  </TableCell>
                </TableRow>
                <TableRow style={style.totalRow}>
                  <TableCell style={style.materialTableRow}>
                    Total Current Liabilities
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[0].totalCurrentLiabilities)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[1].totalCurrentLiabilities)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[2].totalCurrentLiabilities)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[3].totalCurrentLiabilities)}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={style.materialTableRow}>
                    Long Term Debt
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[0].longTermDebt)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[1].longTermDebt)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[2].longTermDebt)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[3].longTermDebt)}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={style.materialTableRow}>
                    Defered Long Term Liabilities
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[0].deferredLongTermLiabilities)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[1].deferredLongTermLiabilities)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[2].deferredLongTermLiabilities)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[3].deferredLongTermLiabilities)}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={style.materialTableRow}>
                    Other Non-Current Liabilities
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[0].otherNonCurrentLiabilities)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[1].otherNonCurrentLiabilities)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[2].otherNonCurrentLiabilities)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[3].otherNonCurrentLiabilities)}
                  </TableCell>
                </TableRow>
                <TableRow style={style.subTotalRow}>
                  <TableCell style={style.materialTableRow}>
                    Total Non-Current Liabilities
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[0].totalNonCurrentLiabilities)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[1].totalNonCurrentLiabilities)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[2].totalNonCurrentLiabilities)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[3].totalNonCurrentLiabilities)}
                  </TableCell>
                </TableRow>
                <TableRow style={style.totalRow}>
                  <TableCell style={style.materialTableRow}>
                    Total Liabilities
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[0].totalLiabilities)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[1].totalLiabilities)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[2].totalLiabilities)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[3].totalLiabilities)}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={style.materialTableRow}>
                    Liabilities and Shareholder Equity
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[0].liabilitiesAndShareholderEquity)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[1].liabilitiesAndShareholderEquity)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[2].liabilitiesAndShareholderEquity)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[3].liabilitiesAndShareholderEquity)}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={style.materialTableRow}>
                    Common Stock Shares Outstanding
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[0].commonStockSharesOutstanding)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[1].commonStockSharesOutstanding)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[2].commonStockSharesOutstanding)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[3].commonStockSharesOutstanding)}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        ) :
        (<LinearProgress style={style.progressBar} />)
      }
    </>
  );
};

export default BalanceSheetTable;
