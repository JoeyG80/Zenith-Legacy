import React, {useEffect} from 'react';
import {
  LinearProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@material-ui/core';
import {
  NO_DRAG,
  handleStringToNumberWithSuffix,
} from 'utils/common-utils';
import {ICashFlowReport, ICashFlowStatement} from 'models/alpha-vantage-api-models';
import AlphaVantageAPIService from 'api-clients/alpha-vantage-api-service';
import {IFinancialsStatementsProps} from 'models/models';
import useData, {EDataProviderKeys} from 'hooks/useData';

/**
 * @description A table component to display an income statement
 * @param {ICashFlowTableProps}
 * @example
 *    <CashFlowTable
 *      style={mergedStyles}
 *      tableData={testTableData} />
 */
function CashFlowTable({
  style,
  isIncomeAnnualOrQuarterly,
}: IFinancialsStatementsProps): JSX.Element {
  const data =
    useData<ICashFlowStatement>(EDataProviderKeys.CASH_FLOW_STATEMENT);
  const symbol = useData<string>(EDataProviderKeys.SYMBOL);
  let trimmedData: ICashFlowReport[] = [];
  if (data) {
    trimmedData = isIncomeAnnualOrQuarterly
      ? data.annualReports
      : data.quarterlyReports;
    trimmedData = trimmedData.slice(0, 5);
  }

  // Grab dividend history
  useEffect(() => {
    if (symbol !== undefined) {
      AlphaVantageAPIService.getCashFlow(symbol);
    }
  }, [symbol]);
  return (
    <>
      {
        data ? (
          <TableContainer className={NO_DRAG}>
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
                    Net Income
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[0].netIncome)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[1].netIncome)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[2].netIncome)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[3].netIncome)}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={style.materialTableRow}>
                    Depreciation
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[3].depreciation)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[3].depreciation)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[3].depreciation)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[3].depreciation)}
                  </TableCell>
                </TableRow>
                <TableRow style={style.totalRow}>
                  <TableCell style={style.materialTableRow}>
                    Change In Liabilities
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[3].changeInLiabilities)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[3].changeInLiabilities)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[3].changeInLiabilities)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[3].changeInLiabilities)}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={style.materialTableRow}>
                    Change in Net Income
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[0].changeInNetIncome)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[1].changeInNetIncome)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[2].changeInNetIncome)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[3].changeInNetIncome)}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={style.materialTableRow}>
                    Change in Account Receivables
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[0].changeInAccountReceivables)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[1].changeInAccountReceivables)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[2].changeInAccountReceivables)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[3].changeInAccountReceivables)}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={style.materialTableRow}>
                    Change in Inventory
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[0].changeInInventory)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[1].changeInInventory)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[2].changeInInventory)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[3].changeInInventory)}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={style.materialTableRow}>
                    Other Operating Cashflow
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[0].otherOperatingCashflow)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[1].otherOperatingCashflow)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[2].otherOperatingCashflow)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[3].otherOperatingCashflow)}
                  </TableCell>
                </TableRow>
                <TableRow style={style.totalRow}>
                  <TableCell style={style.materialTableRow}>
                    Cash Flow from operating activities
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[0].operatingCashflow)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[1].operatingCashflow)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[2].operatingCashflow)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[3].operatingCashflow)}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={style.materialTableRow}>
                    Capital Expenditures
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[0].capitalExpenditures)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[1].capitalExpenditures)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[2].capitalExpenditures)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[3].capitalExpenditures)}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={style.materialTableRow}>
                    Investments
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[0].investments)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[1].investments)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[2].investments)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[3].investments)}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={style.materialTableRow}>
                    Other Cash Flow From Investing Activities
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[0].otherCashflowFromInvestment)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[1].otherCashflowFromInvestment)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[2].otherCashflowFromInvestment)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[3].otherCashflowFromInvestment)}
                  </TableCell>
                </TableRow>
                <TableRow style={style.totalRow}>
                  <TableCell style={style.materialTableRow}>
                    Cash Flow From Investing Activitie
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[0].cashflowFromInvestment)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[1].cashflowFromInvestment)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[2].cashflowFromInvestment)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[3].cashflowFromInvestment)}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={style.materialTableRow}>
                    Dividend Payout
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[0].dividendPayout)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[1].dividendPayout)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[2].dividendPayout)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[3].dividendPayout)}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={style.materialTableRow}>
                    Stock Sale and Purchase
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[0].stockSaleAndPurchase)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[1].stockSaleAndPurchase)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[2].stockSaleAndPurchase)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[3].stockSaleAndPurchase)}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={style.materialTableRow}>
                    Net Borrowings
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[0].netBorrowings)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[1].netBorrowings)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[2].netBorrowings)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[3].netBorrowings)}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={style.materialTableRow}>
                    Other Cashflow From Financing
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[0].otherCashflowFromFinancing)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[1].otherCashflowFromFinancing)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[2].otherCashflowFromFinancing)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[3].otherCashflowFromFinancing)}
                  </TableCell>
                </TableRow>
                <TableRow style={style.totalRow}>
                  <TableCell style={style.materialTableRow}>
                    Cashflow From Financing
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[0].cashflowFromFinancing)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[1].cashflowFromFinancing)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[2].cashflowFromFinancing)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[3].cashflowFromFinancing)}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={style.materialTableRow}>
                    Change In Cash
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[0].changeInCash)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[1].changeInCash)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[2].changeInCash)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[3].changeInCash)}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={style.materialTableRow}>
                    Change In Exchange
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[0].changeInExchangeRate)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[1].changeInExchangeRate)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[2].changeInExchangeRate)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[3].changeInExchangeRate)}
                  </TableCell>
                </TableRow>
                <TableRow style={style.totalRow}>
                  <TableCell style={style.materialTableRow}>
                    Change In Cash and Cash Equivalents
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[0].changeInCashAndCashEquivalents)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[1].changeInCashAndCashEquivalents)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[2].changeInCashAndCashEquivalents)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[3].changeInCashAndCashEquivalents)}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        ):
        (<LinearProgress style={style.progressBar} />)
      }
    </>
  );
};

export default CashFlowTable;
