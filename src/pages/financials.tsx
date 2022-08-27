import {IBaseProps, IFinancialsStatementsProps} from 'models/models';
import FinancialTableWrapper from 'components/financial-table-wrapper/FinancialTableWrapper';
import BalanceSheetTable from 'components/financial-table-wrapper/balance-sheet-table/BalnceSheetTable';
import IncomeStatementTable from 'components/financial-table-wrapper/income-statement-table/IncomeStatementTable';
import CashFlowTable from 'components/financial-table-wrapper/cash-flow-table/CashFlowTable';

/**
 * @description An overview of a company
 * @example
 *  TODO
 */
export function Financials({style}: IBaseProps): JSX.Element {
  return (
    <>
      <FinancialTableWrapper
        component={(props: IFinancialsStatementsProps) => (<BalanceSheetTable {...props}/>)} 
        title="Balance Sheet" 
        style={style}
      />
      <FinancialTableWrapper
        component={(props: IFinancialsStatementsProps) => (<IncomeStatementTable {...props}/>)} 
        title="Income Statement" 
        style={style}
      />
      <FinancialTableWrapper
        component={(props: IFinancialsStatementsProps) => (<CashFlowTable {...props}/>)} 
        title="Cash Flow" 
        style={style}
      />
    </>
  );
}

export default Financials;