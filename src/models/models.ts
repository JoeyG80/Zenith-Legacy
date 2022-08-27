import * as CSS from 'csstype';
import {
  IBalanceSheetStatement,
  ICashFlowStatement,
  IIncomeStatement,
} from './alpha-vantage-api-models';

export interface IStyles {
    [x: string]: CSS.Properties;
}

export interface IBaseProps {
    style: IStyles;
}


// Used for displaying search ressults to a user
export interface ISearchResults {
    title: string;
    value: string;
}

// Interface for recharts data
export interface ChartData {
    [x: string]: string | number;
}

export interface IBusinessAnalysisData {
    name: string;
    symbol: string;
    description: string;
    PERatio: string;
    PEGRatio: string;
    EPS: string;
    bookValue: string;
}

export interface IFinancialsData {
    symbol: string;
    balanceSheet: IBalanceSheetStatement;
    incomeStatement: IIncomeStatement;
    cashFlowStatement: ICashFlowStatement;
}

export interface ITooltipFormatterProps {
    color: string;
    dataKey: string;
    fill: string;
    formatter: undefined | any;
    name: string;
    payload: IPayload;
    points: any[];
    stroke: string;
    strokeWidth: number;
    type: undefined | any;
    unit: undefined | any;
    value: number;
}

export interface IPayload {
    [index: string]: number | number;
}

// Data to be displayed in the simple table data
export interface ITableData {
    [index: string]: any;
    className?: string,
    tooltips?: IObjectOfStrings,
}

export interface IObjectOfStrings {
    [index: string]: string;
}

export interface IFinancialsStatementsProps extends IBaseProps {
    isIncomeAnnualOrQuarterly: boolean;
}
