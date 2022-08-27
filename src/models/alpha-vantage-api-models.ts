export interface IOverview {
  [index: string]: string;
  Symbol: string;
  AssetType: string;
  Name: string;
  Description: string;
  Exchange: string;
  Currency: string;
  Country: string;
  Sector: string;
  Industry: string;
  Address: string;
  FullTimeEmployees: string;
  FiscalYearEnd: string;
  LatestQuarter: string;
  MarketCapitalization: string;
  EBITDA: string;
  PERatio: string;
  PEGRatio: string;
  BookValue: string;
  DividendPerShare: string;
  DividendYield: string;
  EPS: string;
  RevenuePerShareTTM: string;
  ProfitMargin: string;
  OperatingMarginTTM: string;
  ReturnOnAssetsTTM: string;
  ReturnOnEquityTTM: string;
  RevenueTTM: string;
  GrossProfitTTM: string;
  DilutedEPSTTM: string;
  QuarterlyEarningsGrowthYOY: string;
  QuarterlyRevenueGrowthYOY: string;
  AnalystTargetPrice: string;
  TrailingPE: string;
  ForwardPE: string;
  PriceToSalesRatioTTM: string;
  PriceToBookRatio: string;
  EVToRevenue: string;
  EVToEBITDA: string;
  Beta: string;
  '52WeekHigh': string;
  '52WeekLow': string;
  '50DayMovingAverage': string;
  '200DayMovingAverage': string;
  SharesOutstanding: string;
  SharesFloat: string;
  SharesShort: string;
  SharesShortPriorMonth: string;
  ShortRatio: string;
  ShortPercentOutstanding: string;
  ShortPercentFloat: string;
  PercentInsiders: string;
  PercentInstitutions: string;
  ForwardAnnualDividendRate: string;
  ForwardAnnualDividendYield: string;
  PayoutRatio: string;
  DividendDate: string;
  ExDividendDate: string;
  LastSplitFactor: string;
  LastSplitDate: string;
}

export interface IEarnings {
  [index: string]: string | IAnnualEarnings[] | IQuarterlyEarnings[];
  symbol: string;
  annualEarnings: IAnnualEarnings[];
  quarterlyEarnings: IQuarterlyEarnings[];
}

export interface IAnnualEarnings {
  fiscalDateEnding: string;
  reportedEPS: string;
}

export interface IQuarterlyEarnings {
  fiscalDateEnding: string;
  reportedDate: string;
  reportedEPS: string;
  estimatedEPS: string;
  surprise: string;
  surprisePercentage: string;
}

export interface IIncomeStatement {
  [index: string]: string | IIncomeReport[];
  symbol: string;
  annualReports: IIncomeReport[];
  quarterlyReports: IIncomeReport[];
}

export interface IBalanceSheetStatement {
  [index: string]: string | IBalanceSheetReport[];
  symbol: string;
  annualReports: IBalanceSheetReport[];
  quarterlyReports: IBalanceSheetReport[];
}


export interface ICashFlowStatement {
  [index: string]: string | ICashFlowReport[];
  symbol: string;
  annualReports: ICashFlowReport[];
  quarterlyReports: ICashFlowReport[];
}

export interface IIncomeReport {
  [index: string]: string;
  fiscalDateEnding: string;
  reportedCurrency: string;
  totalRevenue: string;
  totalOperatingExpense: string;
  costOfRevenue: string;
  grossProfit: string;
  ebit: string;
  netIncome: string;
  researchAndDevelopment: string;
  effectOfAccountingCharges: string;
  incomeBeforeTax: string;
  minorityInterest: string;
  sellingGeneralAdministrative: string;
  otherNonOperatingIncome: string;
  operatingIncome: string;
  otherOperatingExpense: string;
  interestExpense: string;
  taxProvision: string;
  interestIncome: string;
  netInterestIncome: string;
  extraordinaryItems: string;
  nonRecurring: string;
  otherItems: string;
  incomeTaxExpense: string;
  totalOtherIncomeExpense: string;
  discontinuedOperations: string;
  netIncomeFromContinuingOperations: string;
  netIncomeApplicableToCommonShares: string;
  preferredStockAndOtherAdjustments: string;
}

export interface IBalanceSheetReport {
  [index: string]: string;
  fiscalDateEnding: string;
  reportedCurrency: string
  totalAssets: string;
  intangibleAssets: string;
  earningAssets: string;
  otherCurrentAssets: string;
  totalLiabilities: string;
  totalShareholderEquity: string;
  deferredLongTermLiabilities: string;
  otherCurrentLiabilities: string;
  commonStock: string;
  retainedEarnings: string;
  otherLiabilities: string;
  goodwill: string;
  otherAssets: string;
  cash: string;
  totalCurrentLiabilities: string;
  shortTermDebt: string;
  currentLongTermDebt: string;
  otherShareholderEquity: string;
  propertyPlantEquipment: string;
  totalCurrentAssets: string;
  longTermInvestments: string;
  netTangibleAssets: string;
  shortTermInvestments: string;
  netReceivables: string;
  longTermDebt: string;
  inventory: string;
  accountsPayable: string;
  totalPermanentEquity: string;
  additionalPaidInCapital: string;
  commonStockTotalEquity: string;
  preferredStockTotalEquity: string;
  retainedEarningsTotalEquity: string;
  treasuryStock: string;
  accumulatedAmortization: string;
  otherNonCurrrentAssets: string;
  deferredLongTermAssetCharges: string;
  totalNonCurrentAssets: string;
  capitalLeaseObligations: string;
  totalLongTermDebt: string;
  otherNonCurrentLiabilities: string;
  totalNonCurrentLiabilities: string;
  negativeGoodwill: string;
  warrants: string;
  preferredStockRedeemable: string;
  capitalSurplus: string;
  liabilitiesAndShareholderEquity: string;
  cashAndShortTermInvestments: string;
  accumulatedDepreciation: string;
  commonStockSharesOutstanding: string;
}

export interface ICashFlowReport {
  fiscalDateEnding: string;
  reportedCurrency: string;
  investments: string;
  changeInLiabilities: string;
  cashflowFromInvestment: string;
  otherCashflowFromInvestment: string;
  netBorrowings: string;
  cashflowFromFinancing: string;
  otherCashflowFromFinancing: string;
  changeInOperatingActivities: string;
  netIncome: string;
  changeInCash: string;
  operatingCashflow: string;
  otherOperatingCashflow: string;
  depreciation: string;
  dividendPayout: string;
  stockSaleAndPurchase: string;
  changeInInventory: string;
  changeInAccountReceivables: string;
  changeInNetIncome: string;
  capitalExpenditures: string;
  changeInReceivables: string;
  changeInExchangeRate: string;
  changeInCashAndCashEquivalents: string;
}

export interface IFinancialRow {
  [index: string]: string
  value: string;
  style: string;
}

export interface IIncomeMapping {
  [index: string]: IFinancialRow | undefined;
  fiscalDateEnding: IFinancialRow;
  totalRevenue: IFinancialRow;
  costOfRevenue: IFinancialRow;
  grossProfit: IFinancialRow;
  sellingGeneralAdministrative: IFinancialRow;
  researchAndDevelopment: IFinancialRow;
  nonRecurring: IFinancialRow;
  otherOperatingExpense: IFinancialRow;
  totalOperatingExpense: IFinancialRow;
  operatingIncome: IFinancialRow;
  incomeBeforeTax: IFinancialRow;
  incomeTaxExpense: IFinancialRow;
  netIncomeFromContinuingOperations: IFinancialRow;
  interestExpense: IFinancialRow;
  interestIncome: IFinancialRow;
  netInterestIncome: IFinancialRow;
  netIncome: IFinancialRow;

  discontinuedOperations?: IFinancialRow;
  minorityInterest?: IFinancialRow;
  extraordinaryItems?: IFinancialRow;
  otherNonOperatingIncome?: IFinancialRow;
  effectOfAccountingCharges?: IFinancialRow;
  otherItems?: IFinancialRow;
  totalOtherIncomeExpense?: IFinancialRow;
  netIncomeApplicableToCommonShares?: IFinancialRow;
  preferredStockAndOtherAdjustments?: IFinancialRow;
  ebit?: IFinancialRow;
}

export interface IBalanceSheetMapping {
  [index: string]: IFinancialRow | undefined;
  fiscalDateEnding: IFinancialRow;
  cash: IFinancialRow;
  shortTermInvestments: IFinancialRow;
  cashAndShortTermInvestments: IFinancialRow;
  netReceivables: IFinancialRow;
  inventory: IFinancialRow;
  otherCurrentAssets: IFinancialRow;
  totalCurrentAssets: IFinancialRow;
  propertyPlantEquipment: IFinancialRow;
  intangibleAssets: IFinancialRow;
  goodwill: IFinancialRow;
  longTermInvestments: IFinancialRow;
  otherNonCurrrentAssets: IFinancialRow;
  totalNonCurrentAssets: IFinancialRow;
  totalAssets: IFinancialRow;
  shortTermDebt: IFinancialRow;
  accountsPayable: IFinancialRow;
  otherCurrentLiabilities: IFinancialRow;
  totalCurrentLiabilities: IFinancialRow;
  longTermDebt: IFinancialRow;
  deferredLongTermLiabilities: IFinancialRow;
  otherNonCurrentLiabilities: IFinancialRow;
  totalNonCurrentLiabilities: IFinancialRow;
  totalLiabilities: IFinancialRow;
  liabilitiesAndShareholderEquity: IFinancialRow;
  commonStockSharesOutstanding: IFinancialRow;

  additionalPaidInCapital?: IFinancialRow;
  preferredStockTotalEquity?: IFinancialRow;
  commonStockTotalEquity?: IFinancialRow;
  capitalSurplus?: IFinancialRow;
  retainedEarnings?: IFinancialRow;
  otherShareholderEquity?: IFinancialRow;
  totalShareholderEquity?: IFinancialRow;
  commonStock?: IFinancialRow;
  retainedEarningsTotalEquity?: IFinancialRow;
  capitalLeaseObligations?: IFinancialRow;
  preferredStockRedeemable?: IFinancialRow;
  negativeGoodwill?: IFinancialRow;
  currentLongTermDebt?: IFinancialRow;
  otherLiabilities?: IFinancialRow;
  netTangibleAssets?: IFinancialRow;
  otherAssets?: IFinancialRow;
  accumulatedDepreciation?: IFinancialRow;
  totalLongTermDebt?: IFinancialRow;
  treasuryStock?: IFinancialRow;
  totalPermanentEquity?: IFinancialRow;
  earningAssets?: IFinancialRow;
  accumulatedAmortization?: IFinancialRow;
  deferredLongTermAssetCharges?: IFinancialRow;
  warrants?: IFinancialRow;
}

export interface ICashFlowMapping {
  [index: string]: IFinancialRow | undefined;
  fiscalDateEnding: IFinancialRow;
  netIncome: IFinancialRow;
  depreciation: IFinancialRow;
  changeInLiabilities: IFinancialRow;
  changeInNetIncome: IFinancialRow;
  changeInAccountReceivables: IFinancialRow;
  changeInInventory: IFinancialRow;
  otherOperatingCashflow: IFinancialRow;
  operatingCashflow: IFinancialRow;
  capitalExpenditures: IFinancialRow;
  investments: IFinancialRow;
  otherCashflowFromInvestment: IFinancialRow;
  cashflowFromInvestment: IFinancialRow;
  dividendPayout: IFinancialRow;
  stockSaleAndPurchase: IFinancialRow;
  netBorrowings: IFinancialRow;
  otherCashflowFromFinancing: IFinancialRow;
  cashflowFromFinancing: IFinancialRow;
  changeInCash: IFinancialRow;
  changeInExchangeRate: IFinancialRow;
  changeInCashAndCashEquivalents: IFinancialRow;
  changeInOperatingActivities?: IFinancialRow;
  changeInReceivables?: IFinancialRow;
}

export interface ISearchResults {
  bestMatches: ISearchResult[];
}

export interface ISearchResult {
  [index: string]: string;
}
