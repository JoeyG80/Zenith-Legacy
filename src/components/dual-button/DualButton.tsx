import React from 'react';
import {
  Button,
  ButtonGroup,
} from '@material-ui/core';
import {merge} from 'lodash';
import {NO_DRAG} from 'utils/common-utils';
import {IBaseProps} from 'models/models';
import defaultStyles from './styles';

export interface IDualButtonProps extends IBaseProps {
  className?: string;
  buttonState: boolean;
  buttonStateCallback: (value: boolean) => void;
  buttonTextOne: string;
  buttonTextTwo: string;
}

/**
 * @description Two buttons that toggle state.
 * @param {IDualButtonProps} props
 * @example
 *  const [isBalanceSheetAnnualOrQuarterly, setBalanceSheetAnnualOrQuarterly] =
 *    React.useState<boolean>(true)
 *  <DualButton
 *    style={mergedStyles}
 *    buttonState={isBalanceSheetAnnualOrQuarterly}
 *    buttonStateCallback={setBalanceSheetAnnualOrQuarterly}
 *    buttonTextOne="Annual"
 *    buttonTextTwo="Quarterly" />
 */
export default function DualButton({
  style,
  buttonState,
  buttonStateCallback,
  buttonTextOne,
  buttonTextTwo,
}: IDualButtonProps): JSX.Element {
  const mergedStyles = merge({}, style, defaultStyles);
  return (
    <ButtonGroup
      style={mergedStyles.flexCenter}
      className={NO_DRAG}>
      <Button
        style={buttonState ? mergedStyles.button : mergedStyles.buttonDisabled}
        disableTouchRipple={true}
        onClick={() => {
          buttonStateCallback(true);
        }}>
        {buttonTextOne}
      </Button>
      <Button
        style={!buttonState ? mergedStyles.button : mergedStyles.buttonDisabled}
        disableTouchRipple={true}
        onClick={() => {
          buttonStateCallback(false);
        }}>
        {buttonTextTwo}
      </Button>
    </ButtonGroup>
  );
}
