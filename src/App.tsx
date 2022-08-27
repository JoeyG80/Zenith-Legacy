import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import {
  Button,
  Switch,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import {merge} from 'lodash';
import {
  BrowserRouter,
  Route,
  Switch as SwitchRouter,
} from 'react-router-dom';
import {lightTheme, darkTheme} from './theme';
import styles from './styles';
import NavBar from './components/nav-bar/NavBar';
import {getCookie} from './utils/common-utils';
import Financials from 'pages/financials';
import Summary from 'pages/summary';

/**
 * @description Main App Function
 * @return {ReactElement}
 */
function App() {
  // Theming
  const [isLightOrDarkTheme, setTheme] = React.useState(
    getCookie('theme') === 'true',
  );
  const themeStyles = isLightOrDarkTheme ? lightTheme : darkTheme;
  const mergedStyles = merge({}, styles, themeStyles);
  const toggleTheme = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(!isLightOrDarkTheme);
    document.cookie = `theme=${!isLightOrDarkTheme}`;
  };
  // Handles opening the settings menu
  const [isSettingsOpen, setIsSettingsOpen] = React.useState(false);
  const openOrCloseSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  // Have to set the body styles manually
  document.body.setAttribute(
    'style', `background-color: ${mergedStyles.background.backgroundColor};`);

  return (
    <div style={mergedStyles.background}>
      <BrowserRouter>
        <NavBar
          openSettings={openOrCloseSettings}
          style={isLightOrDarkTheme ? lightTheme : darkTheme}
        />
        <SwitchRouter>
          <Route exact path="/">
            <div></div>
          </Route>
          <Route key="/Summary" path="/Summary">
            <Summary style={isLightOrDarkTheme ? lightTheme : darkTheme} />
          </Route>
          <Route key="/Financials" path="/Financials">
            <Financials style={isLightOrDarkTheme ? lightTheme : darkTheme} />
          </Route>
        </SwitchRouter>
      </BrowserRouter>
      <Drawer
        anchor={'right'}
        open={isSettingsOpen}
        onClose={openOrCloseSettings}>
        <div style={mergedStyles.settingsMenu}>
          <div style={mergedStyles.flexCenter}>
            <h1 style={mergedStyles.text}>Settings</h1>
            <Button onClick={openOrCloseSettings}>
              <CloseIcon
                style={mergedStyles.iconButton}
                fontSize='large'
              ></CloseIcon>
            </Button>
          </div>
          <div style={mergedStyles.flex}>
            <span style={mergedStyles.text}>Theme</span>
            <Switch
              color="default"
              onChange={toggleTheme}
              checked={isLightOrDarkTheme}
              name="theme"
            />
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default App;
