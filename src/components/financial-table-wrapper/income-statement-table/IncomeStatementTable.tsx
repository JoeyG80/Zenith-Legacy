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
import {IIncomeReport, IIncomeStatement} from 'models/alpha-vantage-api-models';
import AlphaVantageAPIService from 'api-clients/alpha-vantage-api-service';
import {IFinancialsStatementsProps} from 'models/models';
import useData, {EDataProviderKeys} from 'hooks/useData';


/**
 * @description A table component to display an income statement
 * @example
 *   <IncomeStatementTable
 *      style={mergedStyles}
 *      tableData={testTableData} />
 */
function IncomeStatementTable({
  style, 
  isIncomeAnnualOrQuarterly,
}: IFinancialsStatementsProps): JSX.Element {
  const symbol = useData<string>(EDataProviderKeys.SYMBOL);
  const data = useData<IIncomeStatement>(EDataProviderKeys.INCOME_STATEMENT);
  let trimmedData: IIncomeReport[] = [];
  if (data) {
    trimmedData = isIncomeAnnualOrQuarterly ? data.annualReports : data.quarterlyReports;
    trimmedData = trimmedData.slice(0, 5);
  }

  // Grab dividend history
  useEffect(() => {
    if (symbol !== undefined) {
      AlphaVantageAPIService.getIncomeStatement(symbol);
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
                    Total Revenue
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[0].totalRevenue)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[1].totalRevenue)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[2].totalRevenue)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[3].totalRevenue)}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={style.materialTableRow}>
                    Cost of Revenue
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[3].costOfRevenue)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[3].costOfRevenue)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[3].costOfRevenue)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[3].costOfRevenue)}
                  </TableCell>
                </TableRow>
                <TableRow style={style.subTotalRow}>
                  <TableCell style={style.materialTableRow}>
                    Gross Profit
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[0].grossProfit)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[1].grossProfit)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[2].grossProfit)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[3].grossProfit)}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={style.materialTableRow}>
                    Selling/General/Admin. Expenses, Total
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[0].sellingGeneralAdministrative)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[1].sellingGeneralAdministrative)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[2].sellingGeneralAdministrative)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[3].sellingGeneralAdministrative)}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={style.materialTableRow}>
                    Research and Development
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[0].researchAndDevelopment)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[1].researchAndDevelopment)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[2].researchAndDevelopment)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[3].researchAndDevelopment)}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={style.materialTableRow}>
                    Non Recurring
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[0].nonRecurring)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[1].nonRecurring)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[2].nonRecurring)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[3].nonRecurring)}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={style.materialTableRow}>
                    Other Operating Expense
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[0].otherOperatingExpense)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[1].otherOperatingExpense)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[2].otherOperatingExpense)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[3].otherOperatingExpense)}
                  </TableCell>
                </TableRow>
                <TableRow style={style.subTotalRow}>
                  <TableCell style={style.materialTableRow}>
                    Total Operating Expense
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[0].totalOperatingExpense)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[1].totalOperatingExpense)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[2].totalOperatingExpense)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[3].totalOperatingExpense)}
                  </TableCell>
                </TableRow>
                <TableRow style={style.totalRow}>
                  <TableCell style={style.materialTableRow}>
                    Operating Income
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[0].operatingIncome)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[1].operatingIncome)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[2].operatingIncome)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[3].operatingIncome)}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={style.materialTableRow}>
                    Income Pre Tax
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[0].incomeBeforeTax)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[1].incomeBeforeTax)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[2].incomeBeforeTax)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[3].incomeBeforeTax)}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={style.materialTableRow}>
                    Income Tax Expense
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[0].incomeTaxExpense)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[1].incomeTaxExpense)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[2].incomeTaxExpense)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[3].incomeTaxExpense)}
                  </TableCell>
                </TableRow>
                <TableRow style={style.totalRow}>
                  <TableCell style={style.materialTableRow}>
                    Net Income from Continueing Operations
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[0].netIncomeFromContinuingOperations)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[1].netIncomeFromContinuingOperations)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[2].netIncomeFromContinuingOperations)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[3].netIncomeFromContinuingOperations)}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={style.materialTableRow}>
                    Interest Expense
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[0].interestExpense)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[1].interestExpense)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[2].interestExpense)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[3].interestExpense)}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={style.materialTableRow}>
                    Intrest Income
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[0].interestIncome)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[1].interestIncome)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[2].interestIncome)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[3].interestIncome)}
                  </TableCell>
                </TableRow>
                <TableRow style={style.totalRow}>
                  <TableCell style={style.materialTableRow}>
                    Net Interest Income
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[0].interestIncome)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[1].interestIncome)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[2].interestIncome)}
                  </TableCell>
                  <TableCell style={style.materialTableRow}>
                    {handleStringToNumberWithSuffix(trimmedData[3].interestIncome)}
                  </TableCell>
                </TableRow>
                <TableRow style={style.totalRow}>
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
              </TableBody>
            </Table>
          </TableContainer>
        ) :
        (<LinearProgress style={style.progressBar} />)
      }
    </>
  );
};

export default IncomeStatementTable;
