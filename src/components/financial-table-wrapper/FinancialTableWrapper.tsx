import React, {useState, createElement} from 'react';
import {IBaseProps} from 'models/models';
import DualButton from 'components/dual-button/DualButton';
import {NO_DRAG} from 'utils/common-utils';


export interface IFinancialTableWrapperProps extends IBaseProps {
  component: any;
  title: string;
}

/**
 * @description A wrapper component for financial tables.
 * Provides the button toggling to reduce code reuse.
 * @example
 *  <FinancialTableWrapper 
 *    style={mergedStyles} 
 *    title="Income Statement" 
 *    component={IncomeStatementTable} />
 */
function FinancialTableWrapper({
  style,
  title,
  component,
}: IFinancialTableWrapperProps): JSX.Element {
  const [
    isIncomeAnnualOrQuarterly,
    setIncomeAnnualOrQuarterly,
  ] = useState<boolean>(false);

  return (
    <div style={style.overlay}>
      <div style={style.flex}>
        <h1
          style={style.header}
          className={NO_DRAG}>
          {title}
        </h1>
        <DualButton
          style={style}
          buttonState={isIncomeAnnualOrQuarterly}
          buttonStateCallback={setIncomeAnnualOrQuarterly}
          buttonTextOne="Annual"
          buttonTextTwo="Quarterly" />
      </div>
      {createElement(component, {style, isIncomeAnnualOrQuarterly})}
    </div>
  );
};

export default FinancialTableWrapper;
