import React, {ChangeEvent} from 'react';
import {Button, TextField} from '@material-ui/core/';
import SearchIcon from '@material-ui/icons/Search';
import Autocomplete, { AutocompleteRenderInputParams } from '@material-ui/lab/Autocomplete';
import SettingsIcon from '@material-ui/icons/Settings';
import {Link} from 'react-router-dom';
import merge from 'lodash/merge';
import defaultStyles from './styles';
import {IBaseProps, ISearchResults} from 'models/models';
import dataProvider from 'services/dataProvider';
import AlphaVantageAPIService from 'api-clients/alpha-vantage-api-service';
import {IBalanceSheetStatement, ISearchResult} from 'models/alpha-vantage-api-models';
import useData, { EDataProviderKeys } from 'hooks/useData';

export interface INavBarProps extends IBaseProps {
  openSettings: () => void;
}

/**
 * @description A main navigation bar component
 * @example
 *  // Parent Component
 *  const [isLightOrDarkTheme, setTheme] = React.useState(false);
 *  const toggleTheme = (event: React.ChangeEvent<HTMLInputElement>) => {
 *    setTheme(!isLightOrDarkTheme);
 *  };
 *
 *  // Handles opening the settings menu
 *  const [isSettingsOpen, setIsSettingsOpen] = React.useState(false);
 *  const openOrCloseSettings = () => {
 *    setIsSettingsOpen(!isSettingsOpen);
 *  };
 *
 *  return (
 *    <NavBar
 *       openSettings={openOrCloseSettings}
 *      style={isLightOrDarkTheme ? lightTheme : darkTheme} />
 *  );
 */
export default function NavBar({
  openSettings,
  style,
}: INavBarProps): JSX.Element {
  const mergedStyles = merge({}, defaultStyles, style);
  const [searchOptions, setSearchOptions] = React.useState([]);

  // Performs the search and displays the results to the user.
  const search = (
    event: React.ChangeEvent<{}>,
    newInputValue: string,
  ): void => {
    // Actual type of result is: undefined | ISearchResults[]
    makeSearchRequest(newInputValue ? newInputValue : '')
      .then((results: any) => {
        setSearchOptions(results ? results : []);
      });
  };
  const data =
    useData<IBalanceSheetStatement>(EDataProviderKeys.BALANCE_SHEET_STATEMENT);
  const symbol = useData<string>(EDataProviderKeys.SYMBOL);
  return (
    <div style={mergedStyles.navBar}>
      <div style={mergedStyles.flexStart}>
        <Button style={mergedStyles.mainMenuButton}>
          <Link style={mergedStyles.navBar} to='/'>Zenith</Link>
        </Button>
        <SearchIcon />
        <Autocomplete
          onChange={setSymbol}
          onInputChange={search}
          style={mergedStyles.searchBar}
          options={searchOptions}
          getOptionLabel={generateOptionLabel}
          renderInput={renderInput}
        />
        <Button style={mergedStyles.mainMenuButton}>
          <Link style={mergedStyles.navBar} to='/Summary'>Summary</Link>
        </Button>
        <Button style={mergedStyles.mainMenuButton}>
          <Link style={mergedStyles.navBar} to='/Financials'>Financials</Link>
        </Button>
      </div>
      <div style={mergedStyles.applicationButtonContainer}>
        <Button onClick={() => openSettings()}>
          <SettingsIcon
            fontSize='large'
          ></SettingsIcon>
        </Button>
      </div>
    </div>
  );
}

/**
 * @description Artifact of the Autocomplete component
 */
const renderInput = (params: AutocompleteRenderInputParams): JSX.Element => (
  <TextField {...params} variant="standard" size="medium" />
);

/**
 * @description A callback to search for securities
 * @param {string} searchTerm - A ticker or symbol. Ex. CTAS
 * @param {string} apiKey - A key to make a request
 * @return {ISearchResult[]} - Search Results
 */
 const makeSearchRequest = (searchTerm: string): Promise<void | ISearchResult[]> => {
  return AlphaVantageAPIService.search(searchTerm)
    .then((results) => {
      return results.bestMatches.map((obj: ISearchResult) => {
        const title: string = `${obj['1. symbol']}       ${obj['2. name']}`;
        return {title, value: obj['1. symbol']};
      });
    }).catch((e) => console.warn(e));
};

/**
 * @description Generates a formatted search result to display to the user.
 * @param option A search result object.
 * @return The formatted label.
 */
const generateOptionLabel =
  (option: ISearchResults) => `${option.title} ${option.value}`;

/**
 * @description Set the searched / selected symbol for use in the application.
 * @param event
 * @param selectedValue The search result that has been added to the search box
 */
const setSymbol = (
  event: ChangeEvent<{}>,
  selectedValue: ISearchResults | null,
): void => {
  if (selectedValue !== null) {
    dataProvider.symbol.next(selectedValue.value);
    // Hacky workaround for a bug with react or rxjs where rxjs callback
    // doesn't go off initially for dynamically rendered components.
    setTimeout(() => dataProvider.symbol.next(selectedValue.value), 0);
  }
};
